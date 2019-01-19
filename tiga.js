function drawLine(panjangKolom){
	var cetak = '';
	for(var i = 0; i < panjangKolom; i++){
		for(var j = 0; j < panjangKolom; j++){
			if(j == i){
				cetak += '*';
			}
			else{
				cetak += ' ';
			}
		}
		cetak += '\n';
	}
	return cetak;
}

console.log(drawLine(8));