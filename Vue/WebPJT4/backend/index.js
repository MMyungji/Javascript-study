// 네이버 API어플리케이션 이용
// https://developers.naver.com/apps/#/myapps/LrhKZx7tVkJoswPwg4Lw/overview
// https://developers.naver.com/docs/datalab/search/#node-js


const express = require('express');
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");
const fs = require('fs');
const cors = require('cors');
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
dotenv.config();
app.use(cors());


// router
app.get('/api/data', async (req,res) => {
    try{
        res.set('Content-Type','application/json; charset=utf-8');
        const tempFile = fs.createReadStream('uploads/chart.json');
        return tempFile.pipe(res);
    }catch(e){
        console.log(e);
        return res.json(e);
    }
});

app.post('/api/data', async (req,res) => {
    try{

        const url = 'https://openapi.naver.com/v1/datalab/search';

        // const request_body = {
            // "startDate": "2017-01-01",
            // "endDate": "2017-04-30",
            // "timeUnit": "month",
            // "keywordGroups": [
            //     {
            //         "groupName": "한글",
            //         "keywords": [
            //             "한글",
            //             "korean"
            //         ]
            //     },
            //     {
            //         "groupName": "영어",
            //         "keywords": [
            //             "영어",
            //             "english"
            //         ]
            //     }
            // ],
            // "device": "pc",
            // "ages": [
            //     "1",
            //     "2"
            // ],
            // "gender": "f"
        // };

        // request body 동적으로 가져오기
        const {startDate,endDate,timeUnit,device,gender,ages,keywordGroups} = req.body;
        const request_body = {
            startDate: startDate,
            endDate: endDate,
            timeUnit: timeUnit,
            device: device === "all" ? "" : device,
            gender: gender === "all" ? "" : gender,
            ages: ages === "all" ? "" : ages,
            keywordGroups:keywordGroups
        }


        const headers = {
            'X-Naver-Client-Id': process.env.CLIENT_ID,
            'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
            'Content-Type': 'application/json'
        };

        const result = await axios.post(url, request_body, {
            headers
        });

        // console.log("서버 결과 데이터:",result.data);

        // 단순 캐싱 방법으로 결과저장
        fs.writeFile('./uploads/chart.json', JSON.stringify(result.data['results']), function(err){
            console.log(err);
            if(err) throw err;
        });

        return res.json({status: "OK"});
        // return res.json(result.data);

    }catch(e){
        console.log(e);
        return res.json(e);
    }
});

app.delete('/api/data', async (req,res) => {
    try{
        fs.unlink('./uploads/chart.json', function (err){
            if(err){
                console.log(err);
                return res.json(err);
            }
        });
        return res.json({status: "success"});
    }catch(e){
        console.log(e);
        return res.json(e);
    }
});



app.listen(PORT, () => console.log(`this server listening on ${PORT}`));