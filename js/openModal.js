
$('.article').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});



const addNewArticleForm = document.getElementById('create-articleForm');//находим форму

addNewArticleForm.addEventListener('submit', retrieveFormDataValue); 

function retrieveFormDataValue(event) { 
    
    // console.log('event',event.target);
    event.preventDefault();


    const pic = addNewArticleForm.querySelector('#pic-input'),//находим картинку
        title = addNewArticleForm.querySelector('#title-input'),//находим заголовок статьи
        content = addNewArticleForm.querySelector('#content-input');// находим содержание

    const values = {
        pic: pic.files,
        title: title.value,
        content: content.value
    }

   console.log('values', values);

}





