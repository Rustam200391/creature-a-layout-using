import {request} from './incomingArticle.js'
// const parse = require('node-html-parser');
// const request = require('./like.js')

const moreArticles = document.getElementById("more-article");

function examplesOffset() {
    let offset = 0;
    console.log(offset);
    moreArticles.addEventListener('click', (e) => {
      e.preventDefault();
      offset +=10;
      request(offset);
      offset +=10;
    })
      // выводим в косоль \
  }
  
  examplesOffset();

  export default examplesOffset;