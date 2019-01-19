function countHandshake(jumlahOrang){
	var totalHandshake = 0;
	for(var i = 0; i < jumlahOrang; i++){
		for(var j = 1; j < jumlahOrang; j++){
			totalHandshake += 1;
		}
	}
	return totalHandshake/2;
}

console.log(countHandshake(3));
console.log(countHandshake(6));