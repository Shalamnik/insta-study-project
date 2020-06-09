let linkElems = getElements('.main__navbar a');
addFocusEvent(linkElems);


function getElements(selector) {
    let elems = document.querySelectorAll(selector);
    return elems;
}

function addFocusEvent(elems) {
    for (let elem of elems) {
        elem.addEventListener('click', () => {
            if (checkClass(elem, 'focused')) return;
    
            removeClasses(elems, 'focused');
            addClass(elem, 'focused');
        });
    }
}

function removeClasses(elems, elemClass) {
    for (let elem of elems) {
        elem.classList.remove(elemClass);
    }
}

function checkClass(elem, elemClass) {
    if (elem.classList.contains(elemClass)) {
        return true;
    } return false;
}

function addClass(elem, elemClass) {
    elem.classList.add(elemClass);
}