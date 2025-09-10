const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchBarView = document.querySelector('.search-bar-view');

searchIcon.addEventListener('click', (e) => {
    searchBar.classList.toggle('open');

    if (searchBar.classList.contains('open')){
        searchBarView.focus();
    }

    e.stopPropagation();
});

document.addEventListener('click', (e) =>{
    if(!searchBar.contains(e.target) && !searchIcon.contains(e.target)){
        searchBar.classList.remove('open');
    }
});
