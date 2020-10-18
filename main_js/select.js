let selectButton = document.querySelector('#select_id');
let article = document.querySelectorAll('.main_article');


selectButton.onchange = function () {

    for (let articles of article){
        if ((selectButton.value === articles.dataset.name) || (selectButton.value == "Все статьи") ){
            articles.style.display = "block";
         } else {
            articles.style.display = "none";
     };
   };
 }