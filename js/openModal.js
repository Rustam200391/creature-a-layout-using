
const getData = document.getElementsByClassName('section1__item');
const article = document.getElementsByClassName('article');// через Dom обращаемся к элементу 'добавить статью'
const img = document.getElementsByTagName('img');// находим элемент по названию тега
// const file = document.querySelector('input[type=file]').files[0];
// const preview = document.querySelector('img');
// const reader = new FileReader();

$('.article').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

function retrieveFormDataValue(event) { 
    
    console.log('event',event);
    event.preventDefault();


    const pic = getData.querySelector('#pic-input'),//находим картинку
        title = getData.querySelector('#title-input'),//находим заголовок статьи
        content = getData.querySelector('#content-input');// находим содержание

    const values = {
        pic: pic.files,
        title: title.value,
        content: content.value
    }

    {
        (event) => {
            //  код
         
            //делаем так, чтобы страница не перезагружалась
            event.preventDefault();
         }
    }

}

const formSend = document.getElementById('create-articleForm');//находим форму

formSend.addEventListener('click', retrieveFormDataValue); 



