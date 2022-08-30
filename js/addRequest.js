
const articleListParentNode = document.getElementsByClassName('section1');//находим через Doom добавить статью

let request = fetch('http://localhost:3000/article/?limit=11');//запрашиваем элементы с бэкенда, а затем помещаем их в список статей, используя для этого шаблон статьи
request.then(response => response.json()).then(data => {
  let articleList = [];

  data.map(article => {//этот модуль обычно импортирует полную строку qualified
    articleList.push(`<section class="section1__item">
    <figure class="image-container">
        <section class="imgMain-gradient"></section>
        <img src="./imgs/leaving for all.png" alt="image" />
    </figure>
    <article class="section1__item-content">
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <a href="#">Читать далее</a>
        <section class="section1__item-number">
            <section class="number">300</section>
            <section class="plus"></section>
            <section class="minus"></section>
        </section>
    </article>
</section>`)//шаблон статьи
  }) 
   console.log(articleList);
   articleListParentNode[0].innerHTML = articleList.join("");//добавляем через Doom
})//продолжать писать скрипт с выводом статей 
// Основы событий мыши
// https://learn.javascript.ru/mouse-events-basics события мыши addEventListener
  .catch(error => {//если метод вообще не может выполнить промис
    //  обработка ошибки
    console.log( error );
});




// second variation

// const searchBox = document.querySelector('.search-box');
// const searchContainer = document.getElementsByClassName('search-container');

// const dataObj = {};
// let data;

// fileInput.addEventListener('change', () => {
//   const file = fileinput.files[0];
//   const reader = new FileReader();

//   reader.readAsDataURL(file);
//   reader.addEventListener('load', () => {
//     dataObj.pic = reader.result;
//     });
// });

// function createDataUrlFnPrms(file) {
//   return new Promise((resolve,reject) => {
//     const reader = new FileReader();
    
//     reader.readAsDataURL(file);
//     reader.addEventListener('load', () => {
//       resolve(reader.result)
//     });
//   })
// }

// form.addEventListener('submit', (e) => {
//   const formData = new FormData(e.target);
//   const formObj = Object.fromEntries(formData);
//   data = { ...formObj, ...dataObj };
//   const fileInput = document.getElementsByClassName('search-box');
//   createDataUrlFnPrms[ileInput.files[0]]
//     .then((dataUrl) => {
//       fetch('https://localhost:3000/article/', { 
//         method: 'POST',
//         headers: {
//           'Content - Type': 'application/json',
//         },
//         body: JSON.stringify({...data,pic:dataUrl}),
//       });
    
//     })

// });






