var turn='X';
var gameboard = [['','',''],['','',''],['','','']];
var state=0;

function checkwin(gameboard){
    for(var i=0;i<3;i++){
        if(gameboard[i][0] === gameboard[i][1] && gameboard[i][1] === gameboard[i][2]){
            if(gameboard[i][0] === 'X')
                return 10;
            else if(gameboard[i][0] === 'O')
                return -10;
        }
    }
    for(var i=0;i<3;i++){
        if(gameboard[0][i] === gameboard[1][i] && gameboard[1][i] === gameboard[2][i]){
            if(gameboard[0][i] === 'X')
                return 10;
            else if(gameboard[0][i] === 'O')
                return -10;
        }
    }
    if(gameboard[0][0] === gameboard[1][1] && gameboard[1][1] === gameboard[2][2]){
        if(gameboard[0][0] === 'X')
            return 10;
        else if(gameboard[0][0] === 'O')
            return -10;
    }
    if(gameboard[0][2] === gameboard[1][1] && gameboard[1][1] === gameboard[2][0]){
        if(gameboard[0][2] === 'X')
            return 10;
        else if(gameboard[0][2] === 'O')
            return -10;
    }
    return 0;
}

function checktie(gameboard){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(gameboard[i][j] === '')
                return false;
        }
    }
    return true;
}

function gameoverutil(gameboard){
    var score = checkwin(gameboard);
    if(score == 10){
        console.log("Player X");
        document.getElementById('results').innerHTML = "<h2>Start a new game!<br>Player X won!</h2>";
        state=1;
    }
    else if(score == -10){
        console.log("Player O");
        document.getElementById('results').innerHTML = "<h2>Start a new game!<br>Player O won!</h2>";
        state=1;
    }
    else{
        if(checktie(gameboard)){
            console.log("Game tied");
            document.getElementById('results').innerHTML = "<h2>Start a new game!<br>Game tied!</h2";
            state=1;
        }
    }
}
function newgame() {
	location.reload();
}
function fun(event) {
	if(state==1)
		return;
	var node=event.target;
	if(node.value == 'X' || node.value =='O'){
		alert("Invalid move");
		return;
	}
	row=node.id.charAt(0);
	col=node.id.charAt(1);
	gameboard[row][col] = turn;
	node.value=turn;
	if(turn=='X')
		turn='O';
	else
		turn='X';
	gameoverutil(gameboard);
}

