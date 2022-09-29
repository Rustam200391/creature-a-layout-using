

//шаблон статьи
// const articleSave =  `<section class="section1__item">
//          <figure class="image-container">
//              <section class="img-gradient"></section>
//              <img src="${article.pic}" alt="image" class="pic" />
            
//          </figure>
//          <article class="section1__item-content">
//              <h2>${article.title}</h2>
//              <p>${article.content}</p>
//               <a href="../Article.htm" target="_blank" rel="noopener noreferrer">Читать далее</a> 
//              <section class="section1__item-number">
//                 <section class="number">300</section>
//                 <section class="plus"></section>
//                 <section class="minus"></section>
//             </section>
//          </article>
//      </section>`;

//пишем функцию что бы достать элементы шаблона



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