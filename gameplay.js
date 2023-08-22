var playerOneName = localStorage.getItem("NameOne");
console.log(playerOneName);
var playerTwoName = localStorage.getItem("NameTwo");
console.log(playerTwoName);
var aturnChecker = playerTwoName = localStorage.getItem("NameTwo");
console.log(playerTwoName);
var points1 = 0;
var points2 = 0;
//change this once they get swapped too
//this is what coding at 6AM does to you

function playerset(){
    document.getElementById("qturn").innerHTML="Turno de Pergunta: " + playerOneName;
    document.getElementById("aturn").innerHTML="Turno de Resposta: " + playerTwoName;
    document.getElementById("name1").innerHTML = playerOneName;
    document.getElementById("score1").innerHTML = points1;
    document.getElementById("name2").innerHTML = playerTwoName;
    document.getElementById("score2").innerHTML = points2;
}
function startgame(){
    document.getElementById("output").innerHTML="<h3 id='turnMan'></h3> <br> <h3 id='placeholder'></h3> <br> <input type='text' id='gameInput'></input> <br> <button onclick='answerProcedure' id='sender'>responder</button>";
    document.getElementById("turnMan").innerHTML="Sua vez, " + aturnChecker + "!";
    document.getElementById("number1").innerHTML=" ";
    document.getElementById("number2").innerHTML=" ";
     var num1 = document.getElementById("number1").value;
     var num2 = document.getElementById("number2").value;
     var ans = parseInt(num1) * parseInt(num2);
     document.getElementById("placeholder").innerHTML=num1+"x"+num2;
}