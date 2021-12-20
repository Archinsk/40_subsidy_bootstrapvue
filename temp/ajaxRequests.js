/*
function ajaxRequest() {
  let myInputField = document.getElementById('myInput');
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	  console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      newElement();
    }
  };
  let requestText = "inputTask=" + myInputField.value;
  xhttp.open("POST", "php/createTask.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(requestText);
}
*/

function ajaxPostRequest(url, requestText, action) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      action();
    }
  };
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(requestText);
}

function createFormElementDataById(inputId) {
	return getInputName(inputId) + "=" + getInputValue(inputId);
}

function getInputName(inputId) {
	let inputField = document.getElementById(inputId);
	return inputField.name;
}

function getInputValue(inputId) {
	let inputField = document.getElementById(inputId);
	return inputField.value;
}