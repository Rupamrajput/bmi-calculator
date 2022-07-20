function checkBMI(){
    var weight = document.getElementById('weight-box').value;
    var height = document.getElementById('height-box').value;
    if (document.getElementById('imperial').checked){
        height *= 30.48;
        weight *= 0.453592; 
    }
    var BMI = (10000*weight)/(height*height);
    BMI = BMI.toFixed(2);
    document.getElementById('result').innerHTML = "Your BMI is: "+BMI;
}


function imperial(){
    document.getElementById('height-unit').innerHTML = "Height in foot & inches";
    document.getElementById('weight-unit').innerHTML = "weight in pounds";

}

function metric(){
    document.getElementById('height-unit').innerHTML = "Height in centimeter";
    document.getElementById('weight-unit').innerHTML = "weight in kilogram";
}