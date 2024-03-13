function validateInput() {
  const inputElement = document.getElementById("temperature");
  const inputValue = inputElement.value.trim();

  if (!/^\d*\.?\d+$/.test(inputValue)) {
    alert("Please enter a valid number for temperature.");
    inputElement.value = "";
  }
}

function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (isNaN(temperature)) {
    alert("Please enter a valid number for temperature.");
    return;
  }

  let convertedTemperature;
  let convertedUnit;

  switch (fromUnit) {
    case "celsius":
      if (toUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
      } else if (toUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
        convertedUnit = "Kelvin";
      } else {
        convertedTemperature = temperature;
        convertedUnit = "Celsius";
      }
      break;
    case "fahrenheit":
      if (toUnit === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
      } else if (toUnit === "kelvin") {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        convertedUnit = "Kelvin";
      } else {
        convertedTemperature = temperature;
        convertedUnit = "Fahrenheit";
      }
      break;
    case "kelvin":
      if (toUnit === "celsius") {
        convertedTemperature = temperature - 273.15;
        convertedUnit = "Celsius";
      } else if (toUnit === "fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        convertedUnit = "Fahrenheit";
      } else {
        convertedTemperature = temperature;
        convertedUnit = "Kelvin";
      }
      break;
    default:
      break;
  }

  document.getElementById("result").innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
