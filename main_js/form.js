let formInput = document.querySelector('.form_input'); 
let areaForm = document.querySelector('.textarea_id');
let SubmitButton = document.querySelector('.btn_submit_button'); 
let countMin = document.querySelector('.count_letter_min');

areaForm.oninput = function() {
    countMin.textContent = areaForm.value.length;
if (areaForm.value.length <= 10 || areaForm.value.length >= 200){
    areaForm.style.color = "red";
    SubmitButton.disabled = true;
} else  {
    areaForm.style.color = "black";
    SubmitButton.disabled = false;
 }
}