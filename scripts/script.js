function convert1(inputString ) {
	//convert input string to float
	inputNumber = parseFloat(inputString);
	//apply the formula
	resultInCelcius = (inputNumber - 32)/1.8;
	//grab output span
	outputSpan = document.getElementById("outputCelcius");
	//display in result
	outputSpan.innerHTML = resultInCelcius ;
	//alert(resultInCelcius);
	//return resultInCelcius;
}


function convert2() {	
    	var valNum = document.getElementById("inputTemp").value;
    	valNum = parseFloat(valNum);
    	var outputField = document.getElementById("outputCelcius");
    	var celciusResult = (valNum-32)/1.8;    
    	var suffix = "degree celcius";
    	outputField.innerHTML = `${celciusResult} ${suffix} `;
  }
  
//validate the input
function convert3() {	
    	var outputField = document.getElementById("outputCelcius");
    	var valNum = document.getElementById("inputTemp").value;
    	valNum = parseFloat(valNum);
    	if(isNaN(valNum)){
		document.getElementById("errorText").innerHTML = "Invalid input";
		outputField.innerHTML = "";
    	}
    	else {
		document.getElementById("errorText").innerHTML = "";
		var celciusResult = (valNum-32)/1.8;    
   		outputField.innerHTML = "" + celciusResult +  " degree celcius";
  	}
}
