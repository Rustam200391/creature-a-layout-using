import {addLikes} from './addLikes.js';
import {articleSave} from './articleSave';

const articleListParentNode = document.querySelector(".section1"); // находим через Doom добавить статью querySelector
const request = (offset = 0) => {
  fetch(`http://localhost:3000/article/?offset=${offset}`) //запрашиваем элементы с бэкенда, а затем помещаем их в список статей, используя для этого шаблон статьи
  .then((response) => response.json())
  .then((data) => {
    data.forEach((article) => {
          const cardCounter = articleSave(article);
          const plusBtn = cardCounter.querySelector('.plus');
          const minusBtn = cardCounter.querySelector('.minus');
          const counter = cardCounter.querySelector('.number');
          plusBtn.addEventListener('click', () => {
            const count = Number(counter.textContent);
            const body = {
              likes: count + 1,
            };
            addLikes(article._id, body, counter);
          });

          minusBtn.addEventListener('click', () => {
            const count = Number(counter.textContent);
            const body = {
              likes: count - 1,
            };
            addLikes(article._id, body, counter);
          });
     articleListParentNode.insertAdjacentHTML("beforeend", articleSave);
   });
 })
 .catch((error) => {
   console.log(error);
 });
};    
          

request();

export default request;

