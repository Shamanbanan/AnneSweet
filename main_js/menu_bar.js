let checkMenuBar = document.querySelector('.menu_cheked');


checkMenuBar.onclick = function () { 
    let navList = document.querySelector('.nav_items');
    if (navList.classList.contains('nav_items')){
        navList.classList.remove('nav_items');
        navList.classList.add('menu_bar');
    } else {
        navList.classList.toggle('menu_bar');
    }         
}