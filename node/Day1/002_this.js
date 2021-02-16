// 변수
const brand = "Adidas";

// 객체
const nike = {
    brand: "Nike",
    size:38,
    series:['에어포스','조던','에어맥스'],

    run(){
        console.log(brand);         // Adidas
        console.log(this.brand);    // Nike

        // forEach값은 언제나 "undefined"이기 때문에 map,filter사용
        console.log(this.series.forEach(e => e === '에어맥스')) // undefined
    }
};

nike.run();
