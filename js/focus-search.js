let inputEl = document.querySelector('.nav-item.search input');
let inputSearchImg = document.querySelector('.search-img');
let inputQuitImg = document.querySelector('.quit-img');

inputEl.addEventListener('focus', () => {
    inputSearchImg.style.left = '5px';
    inputQuitImg.hidden = false;
})

inputEl.addEventListener('blur', () => {
    inputSearchImg.style.left = '72px';
    inputQuitImg.hidden = true;
})