<section class="section1__item">
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
               <section class="plus" onClick="this.parentNode.querySelector('.number').innerText = parseInt(this.parentNode.querySelector('.number').innerText, 10) + 1;"></section>
               <section class="minus" onClick="this.parentNode.querySelector('.number').innerText = parseInt(this.parentNode.querySelector('.number').innerText, 10) - 1;"></section>
           </section>
        </article>
    </section>