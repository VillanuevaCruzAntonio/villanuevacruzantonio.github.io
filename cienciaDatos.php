<!DOCTYPE html>
<html>
<head>
	<title>Formulario</title>
</head>
<body>
<h1>Formulario Ajax</h1>

	<form action="" method="post" id="myform">
        <label for="">Identificador: </label>
        <input type="number" name="" id="" value="1024">

        <label for="">Nombre: </label>
        <input type="text" name="nombre" id="" value="Jesus Antonio Villanueva Cruz">

        <label for="">Número de control: </label>
        <input type="number" name="numControl" id="" value="12161435">

        <label for="">Origen: </label>
        <input type="text" name="textOrigen" id="" value="prueba de origen">

        <input type="submit" value="enviar" id="buttonSend">
    </form>
<script>
	var form = document.getElementById("myform");
	form.onsubmit = function(e){
		e.preventDefault();
		var formdata = new FormData(form);
		var xhr =  new XMLHttpRequest();
		xhr.open("POST","process.php",false);
		xhr.send(formdata);
		console.log(xhr.responseText);
		form.reset();
	}
</script>
<p>Powered by <a href="https://evilnapsis.com/" target="_blank">Evilnapsis</a></p>
</body>
</html>
