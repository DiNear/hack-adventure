const MAX_RESULTS = 25;
const ApiKey = 'AIzaSyA13XKn_DTKVIuBoYXyFYPs7LerhIXnXaM';

var query = 'Eminem';
var defaultVidId = 'dQw4w9WgXcQ';
var duration = 'short';


function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey(ApiKey);
}

function search() {
    var request = gapi.client.youtube.search.list({
        part: 'id',
        q: query,
        maxResults: MAX_RESULTS,
        type: 'video',
        videoEmbeddable: 'true',
        videoDuration: duration
    });
    request.execute(showResponse);
}

function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    //document.getElementById('response').innerHTML += responseString;
    var random = Math.floor(Math.random() * MAX_RESULTS);
    var vidId;
    if (response.pageInfo.totalResults != 0){
        vidId = response.items[random].id.videoId;
		return vidId;
    }
    else{
        vidId = defaultVidId;
		return vidId;
    }
<<<<<<< HEAD
    return "http://youtube.com/watch?v=" + vidId;
=======
>>>>>>> 2dccb2a7e035bb8a214a314ab91ee21dfc217acb
}
