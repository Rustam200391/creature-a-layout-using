"use strict";

function previewFile() {
  var preview = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
} // Transform files in data-URL, с base64 строкой, для отправки файла в json.


document.getElementById('button').addEventListener('click', function () {
  var files = document.getElementById('pic-input').files;

  if (files.length > 0) {
    getBase64(files[0]);
  }
});

function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    console.log(reader.result);
  };

  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
} //  Для этого можно использовать класс FileReader, далее идет пример функции для отправки подобного кода:
// функция возвращает промис с dataUrl
// function getBase64DataUrlPromise(file) {
// return new Promise((resolve, reject) => {
// let reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onload = function () {
// resolve(reader.result)
// };
// reader.onerror = function (error) {
// reject(error);
// };
// });
// }
//находим картинку добавленную через инпут
// const file = document.querySelector('input[type=file]').files[0];
// const readFileAsync = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       resolve(reader.result);
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(file);
//   });
// };
// счетчик лайков
// $('.section1__item-number').click(function(e) {
//   const change = +e.target.dataset.change;
//   if (change) {
//     $('.number', this).text((i, text) => `${parseInt(text, 10) + change}`);
//   }
// });