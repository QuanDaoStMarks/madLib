
function doMadLib() {
	alert("Here is your MadLib");
	var place = prompt("Please give me a place..");
	var emotion = prompt("Now an emotion");
	var sound1 = prompt("How a person speaks, e.g. grunted");
	var adjective = prompt("Give me an adjective");
	var vehicle = prompt("Now give me a type of vehicle");
	var bodypart = prompt("Please give an example of a body part");
	var sound2 = prompt("How a person speaks, e.g. grunts");
	var object = prompt("Give me something a really weird object");
	var move = prompt("How a person moves, e.g. ran");

	alert("Ok, here goes your madLib!");

	var story = 

	"Some days ago, I was talking a jog in the <span class='c'>" +place+ "</span> when I stumbled upon" +
	"an old lady who was walking weirdly. She seemed a bit <span class='c'>" +emotion+ "</span>." +
	" When I asked what she was doing, she just <span class='c'>" +sound1+ "</span> and didn't seem to respond." +
	"Then I realized that she was probably <span class='c'>" +adjective+"</span>. Then I saw she was " +
	"pointing at a <span class='c'>" +vehicle+ "</span> that was approaching quickly. I took hold of her <span class='c'>" +bodypart+ 
	"</span> and jumped out of harm's way. She thanked me by using a series of weird <span class='c'>" +sound2+ "</span> vibrating from her throat." +
	" I helped her stand up, and in turn she gave me a/an <span class='c'>" +object+ "</span>. I said thank you and" +
	" I quickly <span class='c'>" +move+ "</span> away.";



	document.getElementById("finalMadLib").innerHTML = story;
}