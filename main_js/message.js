let areaForm = document.querySelector(".area_form");
let countMin = document.querySelector('.count_letter_min');
let messageUps = document.querySelector('.text_form');
countMin.textContent = areaForm.value.length;

areaForm.oninput = function () {

    if (areaForm.value.length = 200){
        let catAddups = document.createElement('img');
           catAddups.classList.add('image_cat_ups');
    
    areaForm.append(catAddups);
    }
}