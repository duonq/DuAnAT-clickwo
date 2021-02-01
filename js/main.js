const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

/*hien thi keo chu len/xuong*/
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

var isBool = true;
function eye() {
	if (isBool) {
		document.getElementById("pass").type = "text";
		isBool = false;
	} else {
		document.getElementById("pass").type = "password";
		isBool=true;
	}

}