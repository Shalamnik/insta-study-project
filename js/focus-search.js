// get elements
let inputEl = document.querySelector('.header__search input');
let inputSearchImg = document.querySelector('.search-img');
let inputQuitImg = document.querySelector('.quit-img');

//add event to clicked search input
inputEl.addEventListener('focus', () => {
    inputSearchImg.style.left = '5px';
    inputQuitImg.hidden = false;
})

// add event to unclicked search input
inputEl.addEventListener('blur', () => {
    inputSearchImg.style.left = '72px';
    inputQuitImg.hidden = true;
})