require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "YOUR_OAUTH_ACCESS_TOKEN",
    'oauth_access_token_secret' => "YOUR_OAUTH_ACCESS_TOKEN_SECRET",
    'consumer_key' => "YOUR_CONSUMER_KEY",
    'consumer_secret' => "YOUR_CONSUMER_SECRET"
);

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=alex_esquiva&count=100';        
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$json =  $twitter->setGetfield($getfield)
                     ->buildOauth($url, $requestMethod)
                     ->performRequest();
$json = json_decode($jsonraw);
$num_items = count($json->statuses);
for($i=0; $i<$num_items; $i++){

            $user = $json[$i];

            $fecha = $user->created_at;
            $url_imagen = $user->user->profile_image_url;
            $screen_name = $user->user->screen_name;
            $tweet = $user->text;

            $imagen = "<a href='https://twitter.com/".$screen_name."' target=_blank><img src=".$url_imagen."></img></a>";
            $name = "<a href='https://twitter.com/".$screen_name."' target=_blank>@".$screen_name."</a>";

            $rawdata[$i][0]=$fecha;
            $rawdata[$i]["FECHA"]=$fecha;
            $rawdata[$i][1]=$imagen;
            $rawdata[$i]["imagen"]=$imagen;
            $rawdata[$i][2]=$name;
            $rawdata[$i]["screen_name"]=$name;
            $rawdata[$i][3]=$tweet;
            $rawdata[$i]["tweet"]=$tweet;
}

//DIBUJAMOS LA TABLA
        echo '<table border=1>';
        $columnas = count($rawdata[0])/2;
        //echo $columnas;
        $filas = count($rawdata);
        //echo "<br>".$filas."<br>";
        //Añadimos los titulos

        for($i=1;$i<count($rawdata[0]);$i=$i+2){
            next($rawdata[0]);
            echo "<th><b>".key($rawdata[0])."</b></th>";
            next($rawdata[0]);
        }
        for($i=0;$i<$filas;$i++){
            echo "<tr>";
            for($j=0;$j<$columnas;$j++){
                echo "<td>".$rawdata[$i][$j]."</td>";

            }
            echo "</tr>";
        }       
        echo '</table>';

$twitterObject = new Twitter();
$jsonraw =  $twitterObject->getTweets("alex_esquiva");
$rawdata =  $twitterObject->getArrayTweets($jsonraw);
$twitterObject->displayTable($rawdata);

$(document).ready(function() {

	$('a').on('click', function() {
		if ($(this).attr('current') == $('input').val())
			getTweets($('input').val());
		else {
			$('#tweets').empty();
			getTweets($('input').val());
		}
	})

	function getTweets(username) {
		$.ajax({
				url: 'http://search.twitter.com/search.json?',
				data: { q:username },
				dataType: 'jsonp',
				success: function (data) {
					$('a').attr('current',$('input').val());

					$.each(data.results, function (index, tweet) {
						$tweets = $('.tweet').first().clone();

						$tweets.find('.img').attr('src',tweet.profile_image_url);
						$tweets.find('.name').text(tweet.from_user_name);
						$tweets.find('.username').html("<a target='blank_' href='http://twitter.com/"+tweet.from_user+"'>"+tweet.from_user+"</a>");
						$tweets.find('.date').text((tweet.created_at).substring(0, (tweet.created_at).length - 5));
						$tweets.find('.text').text(tweet.text);

						$tweets.hide().appendTo('#tweets').fadeIn();

					})
				}
			});
	}
})
