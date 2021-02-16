const arr = [1,2,3,4,5,6,7];

// reduce로 map구현
const arrMap = arr.reduce(((acc,cur) => {
    acc.push(cur*10);
    return acc
}),[]);

//1. cur = 1  acc = [10]
//2. cur = 2  acc = [10,20]
//3. cur = 3  acc = [10,20,30]


// reduce로 filter구현
const arrFilter = arr.reduce(((acc,cur) => {
    if(cur%2===0) acc.push(cur);
    return acc
}),[]);

console.log(arrMap);
console.log(arrFilter);