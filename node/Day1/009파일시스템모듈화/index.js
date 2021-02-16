const {nameList} = require('./fileModule');
// console.log(nameList);
nameList.then((data)=>{
    // console.log(data.toString());
    const nameArr = data.toString().split(',');
    console.log(nameArr);
})

