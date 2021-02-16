function test(){
    console.log(2);
    setTimeout(function(){
        console.log(4);
    });

    setTimeout(function(){
        console.log(5);
    },0) // 지연시간 0
}

console.log(1);
test();
console.log(3); // 여기 차례까지 다 끝난 후에, setTimeout이 실행됨 

// 결과: 1,2,3,4,5