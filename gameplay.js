var playerOneName = localStorage.getItem("NameOne");
console.log(playerOneName);
var playerTwoName = localStorage.getItem("NameTwo");
console.log(playerTwoName);
var aturnChecker = playerTwoName
console.log(playerTwoName);
var points1 = 0;
var points2 = 0;
//change this once they get swapped too
//this is what coding at 6AM does to you

var answer;

function playerset(){
    document.getElementById("qturn").innerHTML="Turno de Pergunta: " + playerOneName;
    document.getElementById("aturn").innerHTML="Turno de Resposta: " + playerTwoName;
    document.getElementById("name1").innerHTML = playerOneName;
    document.getElementById("score1").innerHTML = points1;
    document.getElementById("name2").innerHTML = playerTwoName;
    document.getElementById("score2").innerHTML = points2;
}
function startgame(){
    document.getElementById("output").innerHTML="<h3 id='turnMan'></h3> <br> <h3 id='placeholder'></h3> <br> <input type='text' id='gameInput'></input> <br> <button onclick='answerProcedure()' id='sender2'>responder</button>";
    document.getElementById("turnMan").innerHTML="Sua vez, " + aturnChecker + "!";
    document.getElementById("number1").innerHTML=" ";
    document.getElementById("number2").innerHTML=" ";
     var num1 = document.getElementById("number1").value;
     var num2 = document.getElementById("number2").value;
    answer = parseInt(num1) * parseInt(num2);
     document.getElementById("placeholder").innerHTML=num1+"x"+num2;
}
function cleanupNrestart(){
    document.getElementById("number1").innerHTML=" ";
    document.getElementById("number2").innerHTML=" ";
    document.getElementById("gameInput").innerHTML=" ";
    document.getElementById("output").innerHTML= " ";
    if (aturnChecker == playerTwoName) {
        aturnChecker = playerOneName;
        document.getElementById("qturn").innerHTML="Turno de Pergunta: " + playerTwoName;
        document.getElementById("aturn").innerHTML="Turno de Resposta: " + playerOneName;
    } else {
        aturnChecker = playerTwoName;
        document.getElementById("qturn").innerHTML="Turno de Pergunta: " + playerOneName;
        document.getElementById("aturn").innerHTML="Turno de Resposta: " + playerTwoName;
    }
}
function answerProcedure(){
    var given = document.getElementById("gameInput").value;
    if (given == answer) {
        if (aturnChecker == playerTwoName) {
            points2 = points2 + 1;
            // cleanupNrestart();
        } else {
            points1 = points1 + 1;
            // cleanupNrestart();
        }
        document.getElementById("score1").innerHTML = points1;
        document.getElementById("score2").innerHTML = points2;
    } else {
        console.log("wawa cat")
    }
    cleanupNrestart();
}