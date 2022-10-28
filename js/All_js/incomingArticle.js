import addLikes from "./addLikes.js";
import articleSave from "./articleSave.js";

console.log("hello");
const articleListParentNode = document.querySelector(".section1"); // находим через Doom добавить статью querySelector
const request = (offset = 0) => {
  console.log("ghbdtn");
  fetch(`http://localhost:3000/article/?offset=${offset}`) //запрашиваем элементы с бэкенда, а затем помещаем их в список статей, используя для этого шаблон статьи
    .then((response) => response.json())
    .then((data) => {
      data.forEach((article) => {
        const template = articleSave(article);
        console.log(template);
        // // const plusBtn = cardCounter.querySelector(".plus");
        // // const minusBtn = cardCounter.querySelector(".minus");
        // // const counter = cardCounter.querySelector(".number");
        // plusBtn.addEventListener("click", () => {
        //   const count = Number(counter.textContent);
        //   const body = {
        //     likes: count + 1,
        //   };
        //   addLikes(article._id, body, counter);
        // });

        // minusBtn.addEventListener("click", () => {
        //   const count = Number(counter.textContent);
        //   const body = {
        //     likes: count - 1,
        //   };
        //   addLikes(article._id, body, counter);
        // });
        articleListParentNode.appendChild(template);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

request();

export default request;
