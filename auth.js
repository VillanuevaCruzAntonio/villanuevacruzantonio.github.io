// El ID del cliente se obtiene de Google Developers Console
// en https://console.developers.google.com/.
// Si ejecuta este código desde un servidor que no sea http: // localhost,
// debe registrar su propia identificación de cliente.
var OAUTH2_CLIENT_ID = '377250606323-9gbq53s5daggomlbejq03ptuar7kcpls.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// Al realizar la carga, el cliente JS de las API de Google invoca automáticamente esta devolución de llamada.
googleApiClientReady = function() {
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
}

// Intente el flujo inmediato del cliente de OAuth 2.0 tan pronto como se cargue la página.
// Si la cuenta de Google actualmente iniciada ha autorizado previamente el cliente especificado como 
// como OAUTH2_CLIENT_ID, la autorización se realiza sin intervención del usuario. De lo contrario, 
// autorización debe mostrarse.
function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

//Manejar el resultado de una llamada gapi.auth.authorize ().
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// http://code.google.com/p/google-api-javascript-client/wiki/GettingStarted#Loading_the_Client
function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}
