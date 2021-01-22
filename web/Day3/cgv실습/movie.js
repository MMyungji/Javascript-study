// // 1번
// let title1 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong");
// let rate1 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span");
// let date1 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > span.txt-info > strong");
// console.log(title1.textContent,rate1.textContent,date1.textContent);

// // 2번
// let title2 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > a > strong");
// let rate2 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > div > strong > span");
// let date2 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong");

// title2.textContent = "삼겹살과 그대라면";
// rate2.textContent = "5%";
// date2.textContent = "1985.07.07";

// // 3번(1번과 3번 SWAP)
// let url1 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a");
// let url3 = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a");

// // HTML안에 있는 모든 내용 = innerHTML
// // 바꾸고 싶은 부분의 상위 태그의 내용으로 전체 바꾸기
// let temp;
// temp = url1.innerHTML;
// url1.innerHTML = url3.innerHTML;
// url3.innerHTML = temp;

// const oneContents = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents");
// const threeContents = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents");

// temp = oneContents.innerHTML;
// oneContents.innerHTML = threeContents.innerHTML;
// threeContents.innerHTML = temp;

let a = document.querySelectorAll(".thumb-image");

console.log(a);

for (let i=0; i<=a.length;i++){
    console.log(a[i].innerHTML);
}