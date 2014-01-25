var story = ["Part UNO", "Part DEUX", "PART DREI"];
var id = ["textInput2", "textInput3"];
var i = 0;

function dispStory(){
	document.getElementById("derf").innerHTML += " " + story[i];
	i++;
}

function test(){
	document.getElementById("dino").innerHTML = "THIS IS ANOTHER SRS TEST YO";
}

function dispInput(input){
	document.getElementById("derf").innerHTML += " " + input;
}

function deleteFunc(funcID){
	var elem = document.getElementById(funcID);
    elem.parentNode.removeChild(elem);
	var new_elem = document.getElementById(id[i]);
	elem.type = "text";
	i++;
}
