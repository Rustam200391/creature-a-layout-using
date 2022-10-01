
const articleListParentNode = document.querySelector('.section1');// находим через Doom добавить статью querySelector 

let request = fetch('http://localhost:3000/article/?limit=11');//запрашиваем элементы с бэкенда, а затем помещаем их в список статей, используя для этого шаблон статьи
request.then(response => response.json())
.then(data => {
  data.forEach(article =>  
    {
    const articleSave =  `<section class="section1__item">
         <figure class="image-container">
             <section class="img-gradient"></section>
             <img src="${article.pic}" alt="image" />
            
         </figure>
         <article class="section1__item-content">
             <h2>${article.title}</h2>
             <p>${article.content}</p>
              <a href="../Article.htm" target="_blank" rel="noopener noreferrer">Читать далее</a> 
             <section class="section1__item-number">
                <section class="number">300</section>
                <section class="plus" data-change="+1"></section>
                <section class="minus" data-change="-1"></section>
            </section>
         </article>
     </section>`;
     articleListParentNode.insertAdjacentHTML('beforeend', articleSave) 
    });
    const link = document.getElementsByTagName('a')[2];
    // находим карточку по классу через doom


    // section.innerHTML = document.getElementsByClassName('article');
// через innerHtml импортируем эту карточку в section1
})
  .catch(error => {//если метод вообще не может выполнить промис
    //  обработка ошибки
    console.log( error );
});




// картинки в b64 код