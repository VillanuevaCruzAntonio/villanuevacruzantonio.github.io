// After the API loads, call a function to enable the search box.
// Después de cargar la API, llame a una función para habilitar el cuadro de búsqueda.
function handleAPILoaded() {
  $('#search-button').attr('enable', true);
}

// Search for a specified string.
// Busque una cadena especificada.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
