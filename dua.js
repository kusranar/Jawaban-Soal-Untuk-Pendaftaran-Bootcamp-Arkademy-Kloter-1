var lowerCase = /[a-z]/g,
upperCase = /[A-Z]/g,
number = /[0-9]/g,
symbol = /[`~!@#$%^&*()-_=+|{}'";:/?.>,<]/g,

password1 = '123Qwer_',
password2 = 'ssdga_A7',
password3 = 'SUper&&4';

function validatePassword(password){
	let caseOne = 0,
	caseTwo = 0,
	caseThree = 0,
	caseFour = 0,
	caseFive = 0;

	if(password.match(lowerCase)){
		caseOne += 1;
	}
	console.log(caseOne);
	if(password.match(upperCase)){
		caseTwo += 1;
	}
	console.log(caseTwo);
	if(password.match(number)){
		caseThree += 1;
	}
	console.log(caseThree);
	if(password.match(symbol)){
		caseFour += 1;
	}
	console.log(caseFour);
	if(password.length >= 8){
		caseFive += 1;
	}
	console.log(caseFive);

	if(caseOne > 0 && caseTwo > 0 && caseThree > 0 && caseFour > 0 && caseFive > 0){
		return true;
	}
	else{
		return false;
	}
}

console.log(validatePassword(password1));