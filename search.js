const MAX_RESULTS = 25;

var query = 'Eminem';
var defaultVidId = 'dQw4w9WgXcQ';
var duration = 'short';

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyA13XKn_DTKVIuBoYXyFYPs7LerhIXnXaM');
    search();
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
    }
    else{
        vidId = defaultVidId;
    }
    console.log("http://youtube.com/watch?v=" + vidId);
}
