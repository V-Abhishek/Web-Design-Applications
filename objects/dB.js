var moviesList = [{name:"A",rating:4.1,view:false},{name:"B",rating:4.3,view:true},{name:"C",rating:4.9,view:true}]
 function display(movie){
 	for(var i=0; i< movie.length; i++){
 		if(movie[i].view){
 			console.log("You have not seen " + "\"" + movie[i].name + "\" - " + movie[i].rating + " stars");
 		}else{
 			console.log("You have seen " + "\"" + movie[i].name + "\" - " + movie[i].rating + " stars");
 		}
 	}
 }
 display(moviesList)