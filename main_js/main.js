let likeButton = document.querySelector(".like_button");
let likeButtonAdd = document.querySelector(".like_button_add");
let count = document.querySelector(".count");
let twitterButton = document.querySelector(".twitter_button");
let facebookButton = document.querySelector(".facebook_button");
let vkButton = document.querySelector(".vk_button");

likeButton.onclick = function () {
  likeButton.classList.toggle("like_button_add");
  if (likeButton.classList.toggle(".like_button_add")) {
    count.textContent++;
    
  } else {
    count.textContent--;
    
  };
  if (likeButton.classList.contains('like_button_add')){
    count.textContent.style.color = "#8f7659";
  }
}
