//해쉬 알고리즘으로 비밀번호 암호화

const bcrypt = require('bcrypt');       // 모듈
const saltRounds = 10;                  // 임이의 숫자 10을 salt라는 개념에 미리 넣어둠

const hashPassword = async(password) => {
    // 비빌번호가 수정되었을때
    try {
        // 소금 생성기 -> 암호화(해킹방지), 암호를 유추할 수 없도록 의미없는 데이터를 뿌려넣기
        const salt = await bcrypt.genSalt(saltRounds);     
        // 비밀번호를 암호화하는 함수 bcrypt.hash(비밀번호, 소금생성한 랜덤값)
        // (추가) 비밀번호를 확인하는 함수 bcrypt.check(비밀번호, 저장된 db의 값)
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch(err) {
        console.log(err);
        return new Error(err);
    }
}

const comparePassword = async (password, hashPassword) => {
    try {
        // 디비에 저장된 비밀번호와 해싱된 비밀번호를 매개변수로 받음
        // 자동으로 확인해서 맞는지 return
        return await bcrypt.compare(password, hashPassword);
    } catch (err) {
        return new Error(err);
    }
}




module.exports = {hashPassword, comparePassword}