//Форма//
let commentForma = document.querySelector(".comment_forma");
let userList = document.querySelector(".list_comment");
let areaForm = document.querySelector(".area_form");
let nameInput = document.querySelector("#name_label");
let submitButton = document.querySelector(".submit_button");
let countMin = document.querySelector('.count_letter_min');


areaForm.oninput = function () {
countMin.textContent = areaForm.value.length;

  if (areaForm.value.length <= 10 || areaForm.value.length >= 200) {
    submitButton.disabled = true;
    areaForm.style.color = "red";

  }else{
    submitButton.disabled = false;
    areaForm.style.color = "black";
  };
}

commentForma.onsubmit = function (evt) {
  evt.preventDefault();
  let userProfile = document.createElement("li");
  let newIcon = document.createElement("img");
  let newName = document.createElement("a");
  let newComment = document.createElement("p");

  userProfile.classList.add("user_comment");
  newIcon.classList.add("image_photo");
  newName.classList.add("name_user");
  newComment.classList.add("comment");

  userList.append(userProfile, newIcon, newName, newComment);

  newName.textContent = nameInput.value;
  newComment.textContent = areaForm.value;
  areaForm.value = " ";
  commentForma.reset ();
  countMin.textContent = 0;
}
