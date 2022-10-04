"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// ..модальное окно
$('.article').click(function (e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});
$('.close-popup').click(function () {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
}); // получаем данные из формы

var addNewArticleForm = document.getElementById('create-articleForm'); //находим форму

addNewArticleForm.addEventListener('submit', retrieveFormDataValue);

function retrieveFormDataValue(event) {
  // console.log('event',event.target);
  event.preventDefault();
  var pic = addNewArticleForm.querySelector('#pic-input'),
      //находим картинку
  title = addNewArticleForm.querySelector('#title-input'),
      //находим заголовок статьи
  content = addNewArticleForm.querySelector('#content-input'); // находим содержание

  var values = {
    pic: pic.files,
    title: title.value,
    content: content.value
  };
  console.log('values', values); // отправляем данные на сервер

  var dataFromForm = {
    "content": content.value,
    "title": title.value,
    "pic": pic.files
  };
  var json = JSON.stringify(dataFromForm);
  console.log(_typeof(json)); // мы получили строку!

  console.log(json);
}