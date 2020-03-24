/* Via Variable
var isBlack = false;
document.querySelector("button").addEventListener("click",function(){
	if(isBlack){
		document.getElementsByTagName("body")[0].style.background="white";
	}else{
		document.getElementsByTagName("body")[0].style.background="black";
	}
	isBlack = !isBlack;
});*/

// Via Class Toggle
document.querySelector("button").addEventListener("click",function(){
	document.getElementsByTagName("body")[0].classList.toggle("black");
});