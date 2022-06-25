"use strict"
var cron;
var temp = 1000;
var s = 0;
var m = 0;
var h = 0;

// iniciar o contador
function start() {
	cron = setInterval(() => {
		timer();

	}, temp);
}

// pausar o contador
function pause() {
	clearInterval(cron);
}

// parar o contador
function stop() {
	clearInterval(cron);
	s = 0;
	m = 0;
	h = 0;

	document.getElementById('counter').innerText = '00:00:00';
}
//contador de tempo
function timer() {

	s++;
	if (s == 60) {
		s = 0;
		m++;

		if (m == 60) {
			m = 0;
			h++;
		}
	};
	var format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
	document.getElementById('counter').innerText = format;
	 //Retorna o valor tratado
	 return format;
}





