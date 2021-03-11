const express = require('express');
const userRouter = require('./user.js');
const roomRouter = require('./room.js');

// express의 라우터를 사용하여 라우터 생성
const router = express.Router();

// 1차 라우터 /

// http://localhost:8000/api/user 라고 시작되는 url은 모두 userRouter로 간다
// 2차 라우터 /api/user
router.use("/api/user",userRouter);

// http://localhost:8000/api/room 라고 시작되는 url은 모두 roomRouter로 간다
// 2차 라우터 /api/room
router.use("/api/room",roomRouter);

module.exports = router;