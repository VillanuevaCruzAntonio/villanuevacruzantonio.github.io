
function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
                var filePreview = document.createElement('img');
                filePreview.id = 'file-preview';
                //e.target.result contents the base64 data from the image uploaded
                filePreview.src = e.target.result;
                console.log(e.target.result);
 
                var previewZone = document.getElementById('file-preview-zone');
                previewZone.appendChild(filePreview);
            }
 
        reader.readAsDataURL(input.files[0]);
    }
}

function publicarPost(session) {
    var publish = {
      method: 'stream.publish',
      message: 'publicar en el muro del usuario',
      picture : 'http://ruta/logo.gif',
      link : 'http://ruta/facebook/',
      name: 'Prueba publicando imagen con javascript',
      caption: 'Post',
      description: 'primera prueba',
      actions : { name : 'prueba',
      link : 'http://www.codigojavaoracle/fb_dev/index.php'}
    };
  
    FB.api('/me/feed', 'POST', publish, function(response) {
        document.getElementById('confirmMsg').innerHTML =
               'Alerta de confirmación.';
    });
 }



