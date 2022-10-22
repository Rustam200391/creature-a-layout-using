
const articleListParentNode = document.querySelector(".section1"); // находим через Doom добавить статью querySelector

const request = (offset = 0) => {
  fetch(`http://localhost:3000/article/?offset=${offset}`) //запрашиваем элементы с бэкенда, а затем помещаем их в список статей, используя для этого шаблон статьи
    .then((response) => response.json())
    .then((data) => {
      data.forEach((article) => {
        const articleSave = `<section class="section1__item">
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
                <section class="plus"></section>
                <section class="minus"></section>
            </section>
         </article>
     </section>`;
        articleListParentNode.insertAdjacentHTML("beforeend", articleSave);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

request();
const moreArticles = document.getElementById("more-article");


function examplesOffset() {
  let offset = 0;
  console.log(offset);
  moreArticles.addEventListener('click', (e) => {
    offset +=10;
    request(offset);
  })
    // выводим в косоль \
}

examplesOffset();

// счетчик лайков
// $('.section1__item-number').click(function(e) {
//   const change = +e.target.dataset.change;
//   if (change) {
//     $('.number', this).text((i, text) => `${parseInt(text, 10) + change}`);
//   }
// });

const plus = document.querySelector('plus');
const minus = document.querySelector('minus');


// plus.addEventListener