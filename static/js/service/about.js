
var dirMail = "";

function sendEmailTo(email) {
	
	const t1 = gsap.timeline({defaults: {duration: 2.0, ease:"power1.out"}})
	
	notVisiblePeople();
	dirMail = email;
		
	if(email == 'ismaeltienda@gmail.com') {
		document.getElementById('escribirA').innerHTML = "Escribir a Ismael";
		const imagen = document.getElementById('ismaelGanadores');
		imagen.scrollIntoView();
		
		
		setTimeout(() => {
			t1.fromTo('.ismaelGanadores', {x:0, opacity: 0}, {x:0,opacity:1}, '<');
			t1.fromTo('.login-box', {x:0, opacity: 0}, {x:0,opacity:1}, '<');			
		}, 500);
	} else if(email == 'arandasanzjorge@gmail.com') {
		document.getElementById('escribirA').innerHTML = "Escribir a Jorge";
		const imagen = document.getElementById('jorgeGanadores');
		imagen.scrollIntoView();
		
		
		setTimeout(() => {
			t1.fromTo('.jorgeGanadores', {x:0, opacity: 0}, {x:0,opacity:1}, '<');
			t1.fromTo('.login-box', {x:0, opacity: 0}, {x:0,opacity:1}, '<');			
		}, 500);
	} else if(email == 'lopez.franco@gmail.com') {
		document.getElementById('escribirA').innerHTML = "Escribir a Raúl";
		const imagen = document.getElementById('raulGanadores');
		imagen.scrollIntoView();
		
		
		setTimeout(() => {
			t1.fromTo('.raulGanadores', {x:0, opacity: 0}, {x:0,opacity:1}, '<');
			t1.fromTo('.login-box', {x:0, opacity: 0}, {x:0,opacity:1}, '<');			
		}, 500);
	} else if(email == 'ayelennuno@gmail.com') {
		document.getElementById('escribirA').innerHTML = "Escribir a Ayelen";
		const imagen = document.getElementById('ayelenGanadores');
		imagen.scrollIntoView();
		
		
		setTimeout(() => {
			t1.fromTo('.ayelenGanadores', {x:0, opacity: 0}, {x:0,opacity:1}, '<');
			t1.fromTo('.login-box', {x:0, opacity: 0}, {x:0,opacity:1}, '<');			
		}, 500);
	} else if(email == 'jaimeroncalperez@gmail.com') {
		document.getElementById('escribirA').innerHTML = "Escribir a Jaime";
		const imagen = document.getElementById('jaimeGanadores');
		imagen.scrollIntoView();
		
		
		setTimeout(() => {
			t1.fromTo('.jaimeGanadores', {x:0, opacity: 0}, {x:0,opacity:1}, '<');
			t1.fromTo('.login-box', {x:0, opacity: 0}, {x:0,opacity:1}, '<');			
		}, 500);
	} else if(email == 'dianasaluena@gmail.com') {
		document.getElementById('escribirA').innerHTML = "Escribir a Diana";
		const imagen = document.getElementById('dianaGanadores');
		imagen.scrollIntoView();
		
		
		setTimeout(() => {
			t1.fromTo('.dianaGanadores', {x:0, opacity: 0}, {x:0,opacity:1}, '<');
			t1.fromTo('.login-box', {x:0, opacity: 0}, {x:0,opacity:1}, '<');			
		}, 500);
	}
	console.log(email);
}


function notVisiblePeople() {
	document.getElementById('login-box').style.opacity = 0;
	document.getElementById('ismaelGanadores').style.opacity = 0;
	document.getElementById('jorgeGanadores').style.opacity = 0;
	document.getElementById('raulGanadores').style.opacity = 0;
	document.getElementById('ayelenGanadores').style.opacity = 0;
	document.getElementById('jaimeGanadores').style.opacity = 0;
	document.getElementById('dianaGanadores').style.opacity = 0;
}


function construitHREF() {
	document.getElementById('hrefMail').href = "mailto:" + dirMail + "?subject=" + document.getElementById('Asunto').value + "&body=" + document.getElementById('Cuerpo').value;

}


function enviar() {
	setTimeout(() => {
			document.getElementById('Asunto').value = "";
			document.getElementById('Cuerpo').value = "";		
	}, 200);
}