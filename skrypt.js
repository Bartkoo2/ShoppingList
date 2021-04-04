var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function dlugosc () {
	return input.value.length;
}
function tworzenie (){
		var li = document.createElement("li",);
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		
		
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Usuń!"));
		li.appendChild(btn);
		btn.onclick=removeParent;
		btn.classList.add("btn");			
}


function removeParent(evt) {
		evt.target.parentNode.remove();
  }

 function AddAfterMause() {
		if ( dlugosc() > 0) {
			tworzenie();
		} else {
			alert("wpisz produkt");
		}
};


function AddAfterKeybord (event) {
		if (dlugosc() > 0 && event.keyCode === 13) {
			tworzenie();
		} 
};

button.addEventListener("click", AddAfterMause);
input.addEventListener("keypress", AddAfterKeybord);


