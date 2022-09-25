const getData = document.getElementsByClassName('section1__item');
const article = document.getElementsByClassName('article');// через Dom обращаемся к элементу 'добавить статью'
const img = document.getElementsByTagName('img');// находим элемент по названию тега
const file = document.querySelector('input[type=file]').files[0];
const preview = document.querySelector('img');
const reader = new FileReader();

//шаблон статьи
const articleSave =  `<section class="section1__item">
         <figure class="image-container">
             <section class="img-gradient"></section>
             <img src="${article.pic}" alt="image" class="pic" />
            
         </figure>
         <article class="section1__item-content">
             <h2>${article.title}</h2>
             <p>${article.content}</p>
              <a href="../Article.htm" target="_blank" rel="noopener noreferrer">Читать далее</a> 
             <section class="section1__item-number">
                <section class="number">300</section>
                <section class="plus"></section>
                <section class="minus"></section>
            </section>
         </article>
     </section>`;

//пишем функцию что бы достать элементы шаблона
function retrieveFormDataValue(event) { 
    event.preventDefault();

    const pic = getData.querySelector('[pic = "pic"]'),//находим картинку
        title = getData.querySelector('[title = "h2"]'),//находим заголовок статьи
        content = getData.querySelector('[content = "p"]');// находим содержание

    const values = {
        pic: pic.value,
        title: title.value,
        content: content.value
    }

}

article[0].addEventListener('click', retrieveFormDataValue);// по событию клика вытаскиваем картинку,заголовок и содержание

//преобразовываем файлы в data-url, с base64 строкой, для отправки файла в json 
// function getBase64(file) {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });
//   }
  
 
//   getBase64(img[0]).then(
//     data => console.log(data)
//   );

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