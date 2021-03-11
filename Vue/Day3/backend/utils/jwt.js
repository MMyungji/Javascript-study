const jwt = require('jsonwebtoken');

// 크로스 오리진 CORS 이슈 발생 -> X
// 쿠키 세션을 사용하는 방식보단 보안 이를 막을 수 있다.

const verifyToken = (req, res, next) => {
    try{
        // 검증하는 로직 
        // jwt.verify(token, 'secretKey')
        req.decoded = jwt.verify(req.headers.authorization,"ssafy");
        return next();
    } catch(err) {
        return res.json(err);
    }
}

module.exports = {verifyToken}