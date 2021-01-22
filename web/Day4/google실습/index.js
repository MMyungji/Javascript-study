const toggleButton = document.querySelector(".toggle-button");
const bodyBackground = document.querySelector(".body-background");
const headerNav = document.querySelector(".header-nav-list-wrapper");
const imgIconWrappers = document.querySelectorAll(".img-icon-wrapper");
const bookmarkText = document.querySelectorAll(".bookmark-text");

const searchInput = document.querySelector('#search-input');
const bookmarkWrapper = document.querySelector('.bookmark-wrapper');

toggleButton.addEventListener("click", function() {
    toggleButton.innerHTML = "다크 모드";
    toggleButton.classList.toggle("toggle-button-darkmode");
    headerNav.classList.toggle("text-darkmode");
    bodyBackground.classList.toggle("body-background-darkmode");
    
    for(let i=0;i<imgIconWrappers.length;i++) {
        imgIconWrappers[i].classList.toggle("img-icon-wrapper-darkmode");
    }
    for(let i=0;i<bookmarkText.length;i++) {
        bookmarkText[i].classList.toggle("text-darkmode");
    }
    if (toggleButton.classList.contains("toggle-button-darkmode")) {
        // toggleButton.textContent = "일반 모드";
        toggleButton.innerHTML = "일반 모드";
    }
});

searchInput.addEventListener("keyup", function(e){
    if(e.code === 'Enter') {
        if(e.target.value === "") {
            alert("검색어를 입력하지 않으셨습니다.");
            return;
        } // 방어코드(검색어가 없을 경우)


        alert(e.target.value +"를 검색하셨습니다.");
        // 해당 주소의 새로운 윈도우 창 띄어지고 
        window.open("https://www.google.com/search?q=" + e.target.value, "_blank");
    }
});

const bookmarkPlus = document.querySelector("#bookmark-plus");

bookmarkPlus.addEventListener("click", function(e){
    const bookmarkItems = document.querySelectorAll(".bookmark_item");

    // 배열의 가장 마지막 아이템 뒤에 추가할 것임
    // 배열의 가장 마지막 요소 저장
    const item = bookmarkItems[bookmarkItems.length-1];
    const clone = item.cloneNode(true); // 복제본 만들기
    item.after(clone);   // item뒤에 복제본 붙여넣기
});