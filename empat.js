function kembalian(uangClient, totalBelanja){
	var uang1 = 500,
	uang2 = 1000,
	uang3 = 2000,
	uang4 = 5000,
	uang5 = 10000,
	uang6 = 20000,
	uang7 = 50000,

	kembalian = uangClient - totalBelanja,
	totalKembalian = [];
	while(kembalian > 0){
		if (kembalian >= uang7) {
			totalKembalian.push(uang7);
			kembalian -= uang7;
		}
		else if(kembalian >= uang6 && kembalian < uang7){
			totalKembalian.push(uang6);
			kembalian -= uang6;
		}
		else if(kembalian >= uang5 && kembalian < uang6){
			totalKembalian.push(uang5);
			kembalian -= uang5;
		}
		else if(kembalian >= uang4 && kembalian < uang5){
			totalKembalian.push(uang4);
			kembalian -= uang4;
		}
		else if(kembalian >= uang3 && kembalian < uang4){
			totalKembalian.push(uang3);
			kembalian -= uang3;
		}
		else if(kembalian >= uang2 && kembalian < uang3){
			totalKembalian.push(uang2);
			kembalian -= uang2;
		}
		else if(kembalian >= uang1 && kembalian < uang2){
			totalKembalian.push(uang1);
			kembalian -= uang1;
		}
	}
	return totalKembalian;
}

console.log(kembalian(50000, 15500));