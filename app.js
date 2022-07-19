function checkBMI(){
    var weight = document.getElementById('weight-box').value;
    var height = document.getElementById('height-box').value;
    var BMI = (10000*weight)/(height*height);
    BMI = BMI.toFixed(6);
    document.getElementById('result').innerHTML = BMI;
}