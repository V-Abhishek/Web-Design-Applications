	console.log("Hi");
	var id = document.getElementById("first");
	console.dir(id);
	var className = document.getElementsByClassName("special")[0];// Only first element
	console.dir(className);
	var qid = document.querySelector("#first");
	console.dir(qid);
	var qclassName = document.querySelectorAll(".special")[0];
	console.dir(qclassName);
	var adjacent = document.querySelector("h1 + p");
	console.dir(adjacent);