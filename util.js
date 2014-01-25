function changeVideo(vidID)
{
	var vidProperty = vidID.concat('?autoplay=1');
	console.log(vidProperty);
	document.getElementById('ytplayer').src = vidProperty;
}