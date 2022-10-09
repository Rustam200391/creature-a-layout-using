
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

// Transform files in data-URL, с base64 строкой, для отправки файла в json.
document.getElementById('button').addEventListener('click', function() {
  let files = document.getElementById('pic-input').files;
  if (files.length > 0) {
    getBase64(files[0]);
  }
});

function getBase64(file) {
   let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

 