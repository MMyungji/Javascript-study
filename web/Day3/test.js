const h1 = document.querySelector("h1").textContent;
console.log(h1);

// 가장 위의 하나의 태그만 가져옴
const linkText = document.querySelector("a[href]");
console.log(linkText);

linkText.textContent = "BBQ";

const linkText2 = document.querySelector(".test");
console.log(linkText2);

linkText2.textContent = "BBQ test";