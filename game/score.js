var player1Score = 0;
var player2Score = 0;
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1ScoreBoard = document.querySelector(" h1 span#player1");
var p2ScoreBoard = document.querySelector(" h1 span#player2");
var resetBtn = document.getElementById("reset");
var inputTag = document.querySelector("input[type='number']");
var winScore = 5;
var gameOver = false;

p1Button.addEventListener("click",function(){
	if (!gameOver && player1Score < winScore) {
		player1Score++;
		p1ScoreBoard.textContent= player1Score;
		if(player1Score === winScore){
			p1ScoreBoard.classList.add("winner-color");
			gameOver=true;
		}
	}
});

p2Button.addEventListener("click",function(){
	if (!gameOver && player2Score < winScore) {
		player2Score++;
		p2ScoreBoard.textContent= player2Score;
		if(player2Score === winScore){
			p2ScoreBoard.classList.add("winner-color");
			gameOver=true;
		}
	}
});

resetBtn.addEventListener("click",function(){
	reset();
});

function reset(){
	player1Score=0;
	player2Score=0;
	gameOver=false;
	p1ScoreBoard.textContent= 0;
	p2ScoreBoard.textContent= 0;
	p1ScoreBoard.classList.remove("winner-color");
	p2ScoreBoard.classList.remove("winner-color");
}

inputTag.addEventListener("change",function(){
	winScore = Number(inputTag.value);
	document.querySelector("p span#finalScore").textContent = winScore;
	reset();
});

