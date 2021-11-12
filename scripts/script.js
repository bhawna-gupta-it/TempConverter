//pass fahrenheit value as input to the function
function convert(valNum) {
    valNum = parseFloat(valNum);
    var celciusResult = (valNum-32)/1.8;
	//alert(celciusResult)    
    var outputField = document.getElementById("outputCelcius");
    outputField.innerHTML = celciusResult +  " celcius";
  }
  
//get fahrenheit from the dom
function convert1() {	
	var valNum = document.getElementById("inputTemp").value;
    valNum = parseFloat(valNum);
	var outputField = document.getElementById("outputCelcius");
    var celciusResult = (valNum-32)/1.8;    
    outputField.innerHTML = "" + celciusResult +  " degree celcius";
  }
  
//validate the input
function convert2() {	
	var valNum = document.getElementById("inputTemp").value;
    valNum = parseFloat(valNum);
	if(isNaN(valNum))
	{
		document.getElementById("errorText").innerHTML = "Invalid input";
	}
	else
	{
		document.getElementById("errorText").innerHTML = "";
	}
	var outputField = document.getElementById("outputCelcius");
    var celciusResult = (valNum-32)/1.8;    
   
	outputField.innerHTML = "" + celciusResult +  " degree celcius";
  }
