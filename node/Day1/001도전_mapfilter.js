const kfc = {
    plate:['BTS','OK','HAHAHA','TT'], // 프로퍼티 키(key)
    run(){
        return this.plate.map(e => e.length);
    }
};

console.log(kfc.run());

const bts = [
    {num:1,weight:50,name:"bts"},
    {num:2,weight:40,name:"kfc"},
    {num:3,weight:60,name:"mc"}
];

// console.log(bts.filter(e=>e.name!="bts"));

let result = bts.filter(e => e.name.indexOf('bts') === -1);
for(let mem of result){
    console.log(mem); // result배열의 한 요소씩 가져옴
}