<!DOCTYPE html>
<html>
  <head>
     <!-- scripts -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-115359195-1', 'auto');
      ga('send', 'pageview');
    </script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="search.js"></script>
    <script src="https://apis.google.com/js/client.js?onload=init"></script>
    
    <script>
        $(document).on('ready',function(){
        $('#buttonSend').click(function(){
            var url = "https://situroax.net/cube/pagos";                                      

            $.ajax({                        
            type: "POST",                 
            url: url,                    
            data: $("#formulario").serialize(),
            success: function(data)            
            {
                $('#resultados').html(data);           
            }
            });
        });
        });
    </script>
    
    <script>
	var form = document.getElementById("formulario");
	form.onsubmit = function(e){
		e.preventDefault();
		var formdata = new FormData(form);
		var xhr =  new XMLHttpRequest();
		xhr.open("POST","https://situroax.net/cube/pagos/",false);
		xhr.send(formdata);
		console.log(xhr.responseText);
		form.reset();
	}
</script>

    <meta charset="utf-8">
    <link rel="stylesheet" href="css/ds.css">
    <link rel="stylesheet" href="main.css">
    <title>Mashup de google</title>
  </head>
  
  <body>  
    <div class="cabecera">
      <h1 class="h11">Mashup</h1>
    </div>

    <div class="separador">
    </div>

    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form action="#">
          <center>
          <p>
            <label>Busqueda: 
            </label>
            <input type="text" id="search" placeholder="Video a buscar" autocomplete="off" />
          </p>
          
          <p>
            <label>Resultados: 
            </label>
            <input type="number" id="resultados" placeholder="Número de Videos" autocomplete="off" />
          </p>
            
          <p>
            <input type="submit" value="Search" class="form-control btn btn-primary w100">
          </p>
          </center>
        </form>
        
        <div id="results" >
        </div>
        
      </div>
    </div> 
    
    <div>
      <h4>Google Maps</h4>
      <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d128440728.38792333!2d-78.93397661249999!3d-10.757591086871543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1521922330283" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
    
    <div>
                  <a class="twitter-timeline"  href="https://twitter.com/hashtag/oaxaca" data-widget-id="983741986212646912">Tweets sobre #oaxaca</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
          
    </div>
    
    <div>
      <form action="" method="post" id="formulario">
        <label for="">Identificador: </label>
        <input type="number" name="" id="" value="1024">

        <label for="">Nombre: </label>
        <input type="text" name="nombre" id="" value="Jesus Antonio Villanueva Cruz">

        <label for="">Número de control: </label>
        <input type="text" name="numControl" id="" value="12161435">

        <label for="">Origen: </label>
        <input type="text" name="textOrigen" id="" value="prueba de origen">

        <input type="submit" value="enviar" id="buttonSend">
    </form>

    <div id="resultados"></div>
    </div>
    
  </body>
</html>
