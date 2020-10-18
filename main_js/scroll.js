let scrollButton = document.querySelector('.scroll_button');

window.onscroll = function () {

    if (pageYOffset > 600){
        scrollButton.style.display = "inline-block";
    } else {
        scrollButton.style.display = "none";
    }
    scrollButton.onclick = function () {
        window.scrollTo(0, 0);
    }
}