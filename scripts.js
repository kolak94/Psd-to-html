var myModal = document.getElementById('modalTeam');
var closeModal = document.getElementsByClassName('close')[0];
var modalBtnTeam = document.getElementById('btnTeam');

modalBtnTeam.onclick = function() {
	myModal.style.display = "block";
	
}
closeModal.onclick = function() {
	myModal.style.display = "none";
}

window.onclick = function() {
	if(event.target == myModal) {
		myModal.style.display = "none";
	}
}