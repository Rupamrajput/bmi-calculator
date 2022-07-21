function checkBMI() {
  var weight = document.getElementById("weight-box").value;
  var height = document.getElementById("height-box").value;
  if (height == "") {
    alert("height is required");
    return false;
  }
  if (weight == "") {
    alert("weight is required");
    return false;
  }
  if (document.getElementById("imperial").checked) {
    if (weight < 7 || weight > 1500) {
      alert("Enter weight between 7 pounds - 1500 pounds");
      return false;
    }
    if (height < 0.7 || weight > 9) {
      alert("Enter height between 0.7 foot - 9 foot");
      return false;
    }
    height *= 30.48;
    weight *= 0.453592;
  } else {
    if (weight < 0.2 || weight > 640) {
      alert("Enter weight between 0.2kg - 640kg");
      return false;
    }
    if (height < 24 || height > 251) {
      alert("Enter height between 24cm - 251cm");
      return false;
    }
  }

  var BMI = (10000 * weight) / (height * height);
  BMI = BMI.toFixed(1);
  document.getElementById("result").innerHTML = "Your BMI is: " + BMI;
}

function imperial() {
  document.getElementById("height-unit").innerHTML = "Height in foot & inches";
  document.getElementById("weight-unit").innerHTML = "Weight in pounds";
}

function metric() {
  document.getElementById("height-unit").innerHTML = "Height in centimeter";
  document.getElementById("weight-unit").innerHTML = "Weight in kilogram";
}
