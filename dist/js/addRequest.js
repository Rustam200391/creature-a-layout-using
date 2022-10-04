"use strict";

var articleListParentNode = document.querySelector('.section1'); // находим через Doom добавить статью querySelector 

var request = fetch('http://localhost:3000/article/?limit=11'); //запрашиваем элементы с бэкенда, а затем помещаем их в список статей, используя для этого шаблон статьи

request.then(function (response) {
  return response.json();
}).then(function (data) {
  data.forEach(function (article) {
    var articleSave = "<section class=\"section1__item\">\n         <figure class=\"image-container\">\n             <section class=\"img-gradient\"></section>\n             <img src=\"".concat(article.pic, "\" alt=\"image\" />\n            \n         </figure>\n         <article class=\"section1__item-content\">\n             <h2>").concat(article.title, "</h2>\n             <p>").concat(article.content, "</p>\n              <a href=\"../Article.htm\" target=\"_blank\" rel=\"noopener noreferrer\">\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435</a> \n             <section class=\"section1__item-number\">\n                <section class=\"number\">300</section>\n                <section class=\"plus\" data-change=\"+1\"></section>\n                <section class=\"minus\" data-change=\"-1\"></section>\n            </section>\n         </article>\n     </section>");
    articleListParentNode.insertAdjacentHTML('beforeend', articleSave);
  });
  var link = document.getElementsByTagName('a')[2]; // находим карточку по классу через doom
  // section.innerHTML = document.getElementsByClassName('article');
  // через innerHtml импортируем эту карточку в section1
})["catch"](function (error) {
  //если метод вообще не может выполнить промис
  //  обработка ошибки
  console.log(error);
});