const searchInput = document.querySelector('.search-input');
const bookmarkWrapper = document.querySelector('.bookmark-wrapper');

searchInput.addEventListener("keyup", function(e){
    if(e.code === 'Enter') {
        if(e.target.value === "") {
            alert("검색어를 입력하지 않으셨습니다.");
            return;
        } // 방어코드(검색어가 없을 경우)


        alert(e.target.value +"를 검색하셨습니다.");
        // 해당 주소의 새로운 윈도우 창 띄어지고 
        window.open("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + e.target.value, "_blank");
    }
});
