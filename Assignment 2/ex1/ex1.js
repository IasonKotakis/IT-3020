function checkgrade(){
	sc = document.getElementById("score").value;
	if(sc >= 90){	
		alert('Your Grade is A+');
	}
	else if(sc <= 89 && sc >= 80){		
		alert('Your Grade is A');
	}
	else if(sc <= 79 && sc >= 75){		
		alert('Your Grade is B+');
	}
	else if(sc <= 74 && sc >= 70){		
		alert('Your Grade is B');
	}
	else if(sc <= 69 && sc >= 65){		
		alert('Your Grade is C');
	}
	else if(sc <= 64 && sc >= 60){		
		alert('Your Grade is C+');
	}
	else if(sc <= 59 && sc >= 55){
		alert('Your Grade is D+');
	}
	else if(sc <= 54 && sc >= 50){		
		alert('Your Grade is D');
	}
	else if(sc <= 49 && sc >= 40){		
		alert('Your Grade is E');
	}
	else if(sc <= 39 && sc >= 0){		
		alert('Your Grade is F');
	}
	else{
		alert('Not A Valid Grade');
	}
}