// folderSelected = (id) => {
//     document.getElementById(id).style = "box-shadow("
// }

fileOpen = (id) => {
    document.getElementById(id).style = ""
}

fileClose = (id) => {
    document.getElementById(id).style = "display: none;"
}


dragElement(document.getElementById("resume"));
dragElement(document.getElementById("python"));
dragElement(document.getElementById("chrome"));
dragElement(document.getElementById("secret-folder"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    console.log((elmnt.id + "header"))
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


if (localStorage.getItem("password-entered") != "true" && localStorage.getItem("code-test") != "true") {
    document.getElementsByTagName("body")[0].innerHTML = "<iframe src='password.html' style='width: 100%; height: 100%; position: absolute' frameborder='0'></iframe>"
    console.log(localStorage.getItem("code-test"))
} else if (localStorage.getItem("code-test") == null) {
    document.getElementsByTagName("body")[0].innerHTML = "<iframe src='compile.html' style='width: 100%; height: 100%; position: absolute' frameborder='0'></iframe>"
} else {

}
