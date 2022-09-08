
const articleListParentNode = document.querySelector('.section1');//почитать про querySelector находим через Doom добавить статью
console.log(articleListParentNode);

let request = fetch('http://localhost:3000/article/?limit=11');//запрашиваем элементы с бэкенда, а затем помещаем их в список статей, используя для этого шаблон статьи
request.then(response => response.json())
.then(data => {
  data.forEach(article =>  
    {
    console.log(article)
    const articleSave =  `<section class="section1__item">
         <figure class="image-container">
             <section class="img-gradient"></section>
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
     </section>`;
     articleListParentNode.insertAdjacentHTML('beforeend', articleSave) 
    });

})
  .catch(error => {//если метод вообще не может выполнить промис
    //  обработка ошибки
    console.log( error );
});




// картинки в b64 код