const MAX_RESULTS = 25;
const ApiKey = 'AIzaSyA13XKn_DTKVIuBoYXyFYPs7LerhIXnXaM';

var defaultVidId = 'dQw4w9WgXcQ';
var duration = 'short';


function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey(ApiKey);
}

function search(query) {
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
    changeVideo("http://youtube.com/embed/" + vidId);
}

function changeVideo(vidID)
{
    var vidProperty = vidID.concat('?autoplay=1&start=5');
    console.log(vidProperty);
    document.getElementById('ytplayer').src = vidProperty;
}


