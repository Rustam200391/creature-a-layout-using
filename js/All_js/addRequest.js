
const articleListParentNode = document.querySelector(".section1"); // находим через Doom добавить статью querySelector

const request = () => {
  fetch("http://localhost:3000/article/?offset=10") //запрашиваем элементы с бэкенда, а затем помещаем их в список статей, используя для этого шаблон статьи
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
                <section class="plus" data-change="+1"></section>
                <section class="minus" data-change="-1"></section>
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

const moreArticles = document.getElementById("more-article");


function examplesOffset() {
  let offset = 0;
  console.log(offset);
  moreArticles.addEventListener('click', (e) => {
    offset +=10;
    
    // выводим в косоль \
    request(offset);
}


// const request = () => {
//   fetch("http://localhost:3000/article/?offset=10") 

//   moreArticles.addEventListener(console.log(request)) {
//     fetch("http://localhost:3000/article/?offset=10+10")
//   }
//   затем на обработчик событий вешается  событие, которое печатает в консоль текущий офсет, а затем увеличивает офсет на 10
//   Т.е событие вешается на нашу кнопку

// // // счетчик лайков

// $('.section1__item-number').click(function(e) {
//   const change = +e.target.dataset.change;
//   if (change) {
//     $('.number', this).text((i, text) => `${parseInt(text, 10) + change}`);
//   }
// });
