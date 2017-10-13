// Use of Array.slice,Form.querySelector,map,every


// check if element has "Default" or "Blank" value
function checkIfElementHasValue(element) {
	return element.value !== "" && element.value !== "Default"
}


//function to validate form and logs that form's elements has value or not
function validateForm() {
	var form = document.forms[0];
  var selectElement = form.querySelectorAll('.input');
	var elementArray = Array.prototype.slice.call(selectElement);
	console.log("Check if elements has value::", elementArray.every(checkIfElementHasValue));
}