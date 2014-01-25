var story = ["Part UNO", "Part DEUX", "PART DREI"];
var isEnd = 0;
var i = 0;

//Story parts
function StoryPiece(presetText, partOfSpeech) {
    this.presetText = presetText;
    this.partOfSpeech = partOfSpeech;
}

storyPieces = [ new StoryPiece("It all started when our favourite", "Occupation"),
    new StoryPiece(", Billy the", "Animal species"),
    new StoryPiece(", woke up in a", "Location"),
    new StoryPiece(". Disoriented, our hero does a thousand", "Exercise"),
    new StoryPiece(" while listening to", "Song name"),
    new StoryPiece(" on repeat to clear his head. Noticing a TV, he starts watching", "TV/Anime series"),
    new StoryPiece(" only to find out his favourite character had been killed by", "Famous person"),
    new StoryPiece(". Billy cries himself to sleep.", "The end")];
    
//End story parts

function dispStory(input){
    if(i < storyPieces.length) {
        document.getElementById("textInput").placeholder = storyPieces[i].partOfSpeech;
        document.getElementById("paragraph").innerHTML += " " + input; 
        document.getElementById("paragraph").innerHTML += " " + storyPieces[i].presetText;
        i++;
    }
    else{
        document.getElementById("paragraph").innerHTML += " " + input;
        document.getElementById("textInput").placeholder = "No more, I beg you!";
        isEnd = 1;
    }
    
}

function clearInput(element) {
    element.value = "";
}

function dispInput(input){
	document.getElementById("paragraph").innerHTML += " " + input;
}

function deleteFunc(funcID){
	var elem = document.getElementById(funcID);
    elem.parentNode.removeChild(elem);
	var new_elem = document.getElementById(id[i]);
	elem.type = "text";
	i++;
}
