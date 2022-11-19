const button = document.getElementById("Followbtn");
function visitor() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 3701;
    }
    document.getElementById("visit").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("visit").innerHTML = 3701;
  }
  location.href = "./Industry4.0.html";
}

function visitLoading() {
  if (localStorage.clicked == 1) {
    localStorage.text = "Following ";
  } else {
    localStorage.text = "Follow ";
  }
  document.getElementById("visit").innerHTML = localStorage.clickcount;
  document.getElementById("follower").innerHTML = localStorage.count;
  document.getElementById("Followbtn").innerHTML = localStorage.text;
}
var counter = 0;
function followers() {
  if (counter >= 1) {
    button.disabled = true;
  }
  if (typeof Storage !== "undefined") {
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      localStorage.count = 489;
      localStorage.clicked = 0;
    }
    document.getElementById("follower").innerHTML = localStorage.count;
    localStorage.text = "Following ";
    localStorage.clicked = 1;
    counter++;
    document.getElementById("Followbtn").innerHTML = "Following  ";
  } else {
    localStorage.clicked = 0;
    document.getElementById("follower").innerHTML = 489;
    document.getElementById("Followbtn").innerHTML = "Follow  ";
  }
}
