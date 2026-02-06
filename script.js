var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var img = document.getElementById("image1");

function boutton1() {
    img.src = "Images/20260205_173000.jpg";
    b1.style.backgroundColor = "black";
    b2.style.backgroundColor = "darkgray";
    b3.style.backgroundColor = "darkgray";
}

function boutton2() {
    img.src = "Images/20260205_173146.jpg";
    b1.style.backgroundColor = "darkgray";
    b2.style.backgroundColor = "black";
    b3.style.backgroundColor = "darkgray"
}

function boutton3() {
    img.src = "Images/20260205_173214.jpg";
    b1.style.backgroundColor = "darkgray";
    b2.style.backgroundColor = "darkgray";
    b3.style.backgroundColor = "black";
}

b1.onclick = function() {boutton1();};
b2.onclick = function() {boutton2();};
b3.onclick = function() {boutton3();};
