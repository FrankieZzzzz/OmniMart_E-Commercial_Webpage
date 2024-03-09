/*=============== SEARCH ===============*/
let searchBtn = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content');

/*=============== menu show ===============*/
if (searchBtn) {
    searchBtn.addEventListener('click',  () =>{
        searchContent.classList.add('show-search');
    })
}
/*=============== menu hidden ===============*/
if (searchClose) {
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
    
}
