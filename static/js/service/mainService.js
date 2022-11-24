

function scaleVideo (){
	const width = document.getElementById("videoYutu").clientWidth;
	console.log(width);
	document.getElementById("videoYutu").height = width/2.5;
	
}

function quitarButton() {
	console.log("que");
	document.getElementById("buttonDownload").style.display = "none";
	document.getElementById("logo-android").style.display = "block";
}

scaleVideo ();



