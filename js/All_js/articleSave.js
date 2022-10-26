const articleSave = `<section class="section1__item">
      <figure class="image-container">
          <section class="img-gradient"></section>
          <img src="${article.pic}" alt="image" />
         
      </figure>
      <article class="section1__item-content">
          <h2>${article.title}</h2>
          <p>${article.content}</p>
           <a href="..//..//html/Article.htm?id=${
            article._id
          }">Читать далее</a> 
          <section class="section1__item-number">
             <section class="number">${article.likes}</section>
             <section class="plus"></section>
             <section class="minus"></section>
         </section>
      </article>
  </section>`;
          

     export default articleSave;







// вставить в section
    //  <section class="plus" onClick="this.parentNode.querySelector('.number').innerText = parseInt(this.parentNode.querySelector('.number').innerText, 10) + 1;"></section>

    //  <section class="minus" onClick="this.parentNode.querySelector('.number').innerText = parseInt(this.parentNode.querySelector('.number').innerText, 10) - 1;" ></section>
     