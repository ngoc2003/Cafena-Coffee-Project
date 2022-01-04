const searchBtn = document.querySelector('.js-search-btn');
const shoppingBtn = document.querySelector('.js-shopping-btn');
const searchForm = document.querySelector('.search-form');
const shoppingForm = document.querySelector('.shopping-form');
const menuBarBtn =document.querySelector('#menubar-btn');
const menuBarForm = document.querySelector('.navbar')

function menuBarBtnJS() {
    if (menuBarForm.classList.contains('open')) {
        menuBarForm.classList.remove('open');
    } else {
        menuBarForm.classList.add('open');
        if (shoppingForm.classList.contains('open')) {
            shoppingForm.classList.remove('open');
        }
        if (searchForm.classList.contains('open')) {
            searchForm.classList.remove('open');
        } 
    }
}
function searchFormJS() {
    if (searchForm.classList.contains('open')) {
        searchForm.classList.remove('open');
    } else {
        searchForm.classList.add('open');
        if (shoppingForm.classList.contains('open')) {
            shoppingForm.classList.remove('open');
        }
        if (menuBarForm.classList.contains('open')) {
            menuBarForm.classList.remove('open');
        } 
    }
}
function shoppingFormJS() {
    if (shoppingForm.classList.contains('open')) {
        shoppingForm.classList.remove('open');
    } else {
        shoppingForm.classList.add('open');
        if (searchForm.classList.contains('open')) {
            searchForm.classList.remove('open');
        } 
        if (menuBarForm.classList.contains('open')) {
            menuBarForm.classList.remove('open');
        } 
    }
}

searchBtn.addEventListener('click', searchFormJS);
shoppingBtn.addEventListener('click', shoppingFormJS);
menuBarBtn.addEventListener('click', menuBarBtnJS);