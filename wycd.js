//what you can do page
var displayScript = document.getElementById("scriptReturned");
var generateButton = document.getElementById("generateButton");

if (generateButton) {
  generateButton.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("inputName").value;
  var recipient = document.getElementById("inputRecipient").value;
  var reasons = document.getElementById("inputReason").value;

  displayScript.innerHTML = "Hello " + recipient + "! I've been recently educating myself on the current hatecrimes towards Asian Americans. Not only are those the only harmful things hitting the Asian communit   y right now, but years of stereotyping and culture of appropriation has always affected AAPI. I wanted to let you know because " + reasons + ". Sincerely, " + name;
}