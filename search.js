// After the API loads, call a function to enable the search box.
// Después de cargar la API, llame a una función para habilitar el cuadro de búsqueda.
function handleAPILoaded() {
  $('#search-button').attr('disable', false);
}

// Search for a specified string.
// Busque una cadena especificada.
function search() {
  // var q = $('#query').val();
  var q = document.getElementById('query').value;
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}

function searchByKeyword() {
  var textoSearch = document.getElementById('query').value;
  var results = youtube.search.list('id,snippet', {q: textoSearch, maxResults: 25});
  for(var i in results.items) {
    var item = results.items[i];
    Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
  }
}
