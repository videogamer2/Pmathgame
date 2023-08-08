//não dá certo????
function adduser(){
    var nameOne = document.getElementById("J1").value;
    var nameTwo = document.getElementById("J2").value;
    localStorage.setItem("NameOne", nameOne);
    localStorage.setItem("NameTwo", nameTwo);
    window.location="gamepage.html";
}
