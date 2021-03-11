const express = require('express');
const router = express.Router();

const db = require('../models/index');
const {hashPassword, comparePassword} = require('../utils/bcrypt');
const {upload} = require('../utils/multer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../utils/jwt');

// 기능 정의

// get post patch delete
/*
 *  1. 회원가입 post
    2. 회원 정보 가져오기 get(전체 회원 / 회원 한명)
    3. 유저 정보 업데이트 patch
    4-1. 프로필 이미지 가져오기 get
    4-2. 프로필 업로드 post
    5. 로그인 post
    6. 회원 탈퇴 delete
 */


// 회원 정보 가져오기 get, 회원 전체 정보
router.get("/",async (req,res) => {
    try {
        const result = await db["user"].findAll({
            attributes: [
                "id",
                "name",
                "email",
                "profile",
                "type",
                "createdAt",
                "updatedAt"
            ]
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

// 회원 정보 가져오기 get, 회원 한명의 정보(id값 params로 받아옴)
router.get("/:id",async (req,res) => {
    try {
        const result = await db["user"].findOne({
            attributes: [
                "id",
                "name",
                "email",
                "profile",
                "type",
                "createdAt",
                "updatedAt"
            ],
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

// 회원가입 post
router.post("/",async (req,res) => {
    try {
        // console.log(req.body);
        const {name,email,password,type} = req.body;
        const hashedPassword = await hashPassword(password);
        const result = await db["user"].create({
            name,
            email,
            password:hashedPassword,
            type
        });
        // console.log(result);
        return res.json({status: "OK"});
    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

// 유저 정보 업데이트 patch
router.patch("/:id",async (req,res) => {
    try {
        const {name,password,type} = req.body;

        const userInformation = await db["user"].findOne({
            where: {
                id:req.params.id
            }
        });

        // console.log(userInformation.dataValues);

        const result = comparePassword(password, userInformation.dataValues.password);
        if(result){
            const update = await db["user"].update({
                name:name,
                type:type
            },{
                where:{
                    id:req.params.id
                }
            }
            )
        }

        return res.json({status: "OK"});
    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

// 프로필 이미지 가져오기 get
router.get("/:id/profile",async (req,res) => {
    try {
        const userInformation = await db["user"].findOne({
            attributes: ["id","profile"],
            where: {
                id:req.params.id
            }
        });
        const userData = userInformation.dataValues;
        if (userData && userData.profile) {
            res.set('Content-Disposition', 'inline; filename=profile.png');
            const file = fs.createReadStream(`uploads/${userData.profile}`);

            return file.pipe(res)
        } else {
            return res.json({status:"Error"});
        }
    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

// 프로필 업로드 post
router.post("/:id/profile", verifyToken, upload.single("profile"), async (req,res) => {
    // 업로드는 middleware를 통해 multer가 처리
    // *프로필이 이미 있는 경우 
    // 1. 해당 id를 기반으로 db에서 데이터를 불러온다.
    // 2. 해당 데이터에서 profile이 존재하는 경우 -> 기존 프로필 삭제
    // 3. 업로드는 이미 되어잇음
    // 4. uploads에 있는 파일 삭제
    // 5. db의 profile을 새로운 파일명으로 업데이트

    // *프로필이 없는 경우
    // 1. 업로드
    // 2. db의 profile을 새로운 파일명으로 업데이트
    try {
        // console.log(req.params);
        const userInformation = await db["user"].findOne({
            where:{
                id: req.params.id
            }
        });
        // console.log(userInformation.dataValues);

        // 기존의 프로필이 있는 경우를 검증
        if (userInformation.dataValues && userInformation.dataValues.profile){
            // 기존의 프로필 삭제
            fs.unlink(`uploads/${userInformation.dataValues.profile}`, function(err) {
                if(err){
                    console.log(err);
                }
            });
        }

        // params에 id값이 있으면 실행되는 로직
        await db["user"].update(
            {
                profile: req.file.filename
            },
            {
                where:{
                    id: req.params.id
                }
            }
        )

        return res.json({status:"OK"});
    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});

// 회원 탈퇴 delete
router.delete("/:id", verifyToken, async (req,res) => {
    try {
        // paranoid = true: 실제 데이터가 삭제되지 않고 deletedAt에 표시됨
        const result = await db["user"].destroy({
            where: {
                id: req.params.id
            }
        })
        return res.json({status:"OK"});
    } catch (err) {
        console.log(err);
        return res.json({hello: "Error"});
    }
});

// 로그인 post
router.post("/login",async (req,res) => {
    /**
     * 로그인
     * db에서 맞는지 검증
     * jwt발행
     * jwt 전달해서 검사 -> 유효한지 확인 -> 응답
     */
    try {
        const {email,password} = req.body;

        const userData = await db["user"].findOne({
            attributes: ["id","password","name"],
            where: {
                // email:email
                email
            }
        });

        const hashedPassword = userData.dataValues.password;
        // console.log(hashedPassword)
        const compareResult = await comparePassword(password, hashedPassword);
        // console.log(compareResult);

        if(compareResult){
            const token = jwt.sign({
                id:userData.dataValues.id
            }, "ssafy", {
                expiresIn: "24h"
            });

            return res.json({
                resultCode: 200,
                token: token,
                id: userData.dataValues.id,
                name: userData.dataValues.name
            });
        }

        // return res.json({hello:"world"});
    } catch (err) {
        console.log(err);
        return res.json({status: "Error"});
    }
});



module.exports = router;