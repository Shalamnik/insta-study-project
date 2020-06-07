let inputEl = document.querySelector('.nav-item.search input');

inputEl.addEventListener('focus', () => {
    let inputSearchImg = document.querySelector('.search-img');
    inputSearchImg.style.left = '5px';
})

inputEl.addEventListener('blur', () => {
    let inputSearchImg = document.querySelector('.search-img');
    inputSearchImg.style.left = '72px';
})
