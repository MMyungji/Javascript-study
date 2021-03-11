const express = require('express');
const router = express.Router();

const db = require('../models/index');
const {upload} = require('../utils/multer');
const fs = require('fs');
const {verifyToken} = require('../utils/jwt');

const {sequelize} = require('../models');
const Seq = require("sequelize");
const { diffieHellman } = require('crypto');


// 기능 정의
/**
 * 전체 방 가져오기
 * 방 정보 받아오기
 * 방 이미지 받아오기
 * 방 정보 작성하기
 * 방 정보 업데이트
 * 방 삭제
 */

// 전체 방 가져오기 get
router.get('/', async (req, res) => {
    try {
        const roomInformations = await db["room"].findAll({
            include: [{ model: db["room_image"] }, { model: db["room_option"] }],
            where: {
                location: {
                    [Seq.Op.like]: req.query.search ? `%${req.query.search}%` : `%%`
                }
            }
        });
        // console.log(roomInformations);


        // console.log(1,req.url);
        // console.log(2,req.hostname);
        // console.log(3,req.get("host"));

        const makeImageUrl = (id) => `${req.protocol}://${req.get("host")}/api/room/image/${id}`;

        // 방에 이미지가 있는 경우
        const plainInformation = roomInformations.map((el) => el.get({plain:true}));

        const result = plainInformation.map(li =>{
            if(li['room_images'].length){
                li['room_images'] = li['room_images'].map(image => {
                    return {...image, url:makeImageUrl(image.id)}
                })
            }
            return li;
        })


        return res.json({
            status: "OK",
            result
        });
    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

// 방 정보 가져오기 get
router.get('/:id', async (req, res) => {
    try {
        const result = await db["room"].findOne({
            include: [{ model: db["room_image"] }, { model: db["room_option"] }],
            where: {
                id: req.params.id
            }
        });

        return res.json({
            status: "OK",
            result
        });

    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

// 방 이미지 가져오기 get
router.get('/image/:id', async (req, res) => {
    try {
        const roomImages = await db["room_image"].findOne({
            where:{
                id: req.params.id
            }
        });
        console.log(0,roomImages.dataValues);
        console.log(1, roomImages.dataValues["file_name"]);

        if(roomImages.dataValues && roomImages.dataValues["file_name"]){
            // 이미지 바로 보이게 하기
            res.set('Content-Disposition',`inline; filename=profile.png`);
            const file = fs.createReadStream(`uploads/${roomImages.dataValues["file_name"]}`);
            
            // return file.push(res)
            return file.pipe(res)
        }else {
            return res.json({status: "Error"});
        }

    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

// 방 정보 작성하기
/**
 * rooms table: price, room_size, room_type, title, content, location, latitude, longitude, 작성자 id(decoded)
 * room_images table: room_id, file_name, original_file_name
 * room_options table: room_id, item
 */
router.post('/', verifyToken, upload.array("room_image"), async (req, res) => {
    // 테이블이 다른 데이터들을 다룰때, 에러없는 경우에 db에 일괄적으로 업로드해주는 코드
    // tracsaction -> commit, rollback(에러난경우)
    const transaction = await sequelize.transaction();
    
    try {
        const {price, room_size, room_type, title, content, location, latitude, longitude, item} = req.body;
        // console.log(req.body);

        /**
         * room create로 db에 insert
         * 작성된 room의 id를 기반으로 room_image와 room_option을 넣어야 한다.
         * transaction을 활용하여 데이터 전부 성공적으로 업로드 되는 경우에만 commit을 진행
         * 
         */
        const room = await db["room"].create({
            price,
            title,
            content,
            room_type,
            room_size,
            location,
            latitude,
            longitude,
            user_id:req.decoded.id
        },{
            transaction: transaction
        });

        // item은 하나이상일 수 있다(string, array구분)
        if(item){
            if(typeof item === "string"){
                await db["room_option"].create({
                    item:item,
                    room_id:room.dataValues.id
                }, {
                    transaction:transaction
                });
            } else {
                await Promise.all(
                    item.map(async (li) => {
                        await db["room_option"].create({
                            item:li,
                            room_id: room.dataValues.id
                        }, {
                            transaction:transaction
                        });
                    })
                )
            }
        }

        // 방 이미지 저장
        if (req.files) {
            await Promise.all(
                req.files.map(async (li) => {
                    console.log(li);
                    await db["room_image"].create(
                        {
                            file_name: li.filename,
                            original_file_name: li.originalname,
                            room_id: room.dataValues.id,
                        }, {
                        transaction: transaction
                    }
                    );
                })
            );
        }


        // 모든 요청이 성공적으로 진행되면 commit을 통해 일괄 db데이터 삽입
        transaction.commit();

        return res.json({status: "OK"});
    } catch (err) {
        console.log(err);

        // 에러 발생시, db에 삽입되지 않게 처리
        transaction.rollback();

        // 만약 에러가 났는데 이미지가 올라간 경우, 삭제처리 해주기
        if (req.files){
            req.files.forEach(li => {
                console.log(li.path);
                fs.unlink(li.path,(err) => {
                    if(err) {
                        console.log(err);
                    }
                })
            })
        }
        return res.json({status: "Error"});
    }
});

// 방 정보 업데이트
router.patch('/:id', async (req, res) => {
    try {
        return res.json({status: "OK"});
    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

// 방 정보 삭제하기
router.delete('/:id', async (req, res) => {
    try {
        return res.json({status: "OK"});
    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

module.exports = router;