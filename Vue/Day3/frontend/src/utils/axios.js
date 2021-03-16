import axios from "axios"

// 서버 url
const request = axios.create({
    baseURL:"http://localhost:8000/api"
});

/**
 * axios인스턴스 생성
 * url 고정으로 설정하기
 * const '인스턴스' = axios.create({
        baseURL: 'https://api.hnpwa.com',
        timeout: 1000
    });
 */

export const userAPI = {
    // 회원가입
    register: (name,email,password) => {
        return request.post('/user',{
            name,
            email,
            password
        });
    },
    // 로그인
    login: (email,password) => {
        return request.post('/user/login',{
            email,
            password
        });
    }
}