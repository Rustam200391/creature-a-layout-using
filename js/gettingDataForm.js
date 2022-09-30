
  function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }


// Transform files in data-URL, с base64 строкой, для отправки файла в json.
document.getElementById('button').addEventListener('click', function() {
  let files = document.getElementById('pic-input').files;
  if (files.length > 0) {
    getBase64(files[0]);
  }
});

function getBase64(file) {
   let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

  //  Для этого можно использовать класс FileReader, далее идет пример функции для отправки подобного кода:

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

// Правильный способ – использовать специальный объект FormData, доступный в браузере:

// <form method="post">
//   <input name="email" value="example@example.com">
//   <input name="password" value="supersecret">
//   <input type="submit" value="Sign Up">
// </form>


