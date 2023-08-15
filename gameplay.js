var playerOneName = localStorage.getItem(NameOne);
console.log(playerOneName);
var playerTwoName = localStorage.getItem(NameTwo);
console.log(playerTwoName);
var aturnChecker = var playerTwoName = localStorage.getItem(NameTwo);
console.log(playerTwoName);
//change this once they get swapped too
//this is what coding at 6AM does to you

function playerset(){
    document.getElementById("qturn").innerHTML="Turno de Pergunta: " + playerOneName;
    document.getElementById("aturn").innerHTML="Turno de Resposta: " + playerTwoName;
}
function startgame(){
    document.getElementById("output").innerHTML="<h3 id='turnMan'></h3> <br> <h3 id='placeholder'></h3>";
    document.getElementById("turnMan").innerHTML="Sua vez, " + aturnChecker + "!";
}