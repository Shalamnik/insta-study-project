let gallery = document.querySelector('.main__gallery');
let imgCount = 1;

for (let i = 1; i <= 3; i++) {
    // create img row block with 3 images for gallery
    let blockWithImages = createElBlock('div', 'img-block');

    for (let j = 1; j <= 3; j++) {

        // create img block with img, mini-img and statistics
        let imgBlock = createElBlock('div', 'img-block__img');
        
        // create miniImg and append to img block
        let miniImgBlock = createMiniImgBlock(imgCount);
        imgBlock.append(miniImgBlock);
        
        // create img for gallery and append to img block
        let imgSrc = `img/batman-img/${imgCount}.jpg`;
        let img = createImg(imgSrc, null);
        imgBlock.append(img);

        // create statistics blck for img
        let statBlock = createElBlock('div', 'img-statistics');

        // create comments in stat block
        let likeBlock = createElBlock('span', 'likes');
        let likeImg = createImg('img/like.png', 'like-img');
        let likeText = createElBlock('span', 'bold');
        likeText.innerHTML = '500';

        likeBlock.append(likeImg, likeText);

        // create likes in stat block
        let commentBlock = createElBlock('span', 'comments');
        let commentImg = createImg('img/comment.png', 'comment-img');
        let commentText = createElBlock('span', 'bold');
        commentText.innerHTML = '50';

        commentBlock.append(commentImg, commentText);

        // add likes and comments to statistics block
        statBlock.append(likeBlock, commentBlock);

        // add statistics block to img block
        imgBlock.append(statBlock);

        // add img block to block with images
        blockWithImages.append(imgBlock);

        imgCount++;
    }

    gallery.append(blockWithImages);
}

function createElBlock(elem, elemClass) {
    let createdEl = document.createElement(elem);
    createdEl.classList.add(elemClass);

    return createdEl;
}

function createMiniImgBlock(count) {
    let miniImgBlock = createElBlock('span', 'mini-img');
    let miniImg = document.createElement('img');
    
    miniImg.src = `img/batman-img/${count}.jpg`;
    miniImg.alt = `mini-img-${count}`;

    miniImgBlock.append(miniImg);

    return miniImgBlock;
}

function createImg(imgSrc, imgClass) {
    let img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add(imgClass);

    return img;
}