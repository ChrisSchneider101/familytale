var kb;

window.addEventListener('keydown', function(e) {
	kb = (kb || []);
	kb[e.keyCode] = (e.type == "keydown");
})

window.addEventListener('keyup', function (e) {
	kb[e.keyCode] = (e.type == "keydown");            
})

function advFrame() {
	console.log("hit");
}