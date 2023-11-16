// Remove Trailing Zeroes from Results
function removeTrailingZeros(value) {
  return parseFloat(value.toFixed(4));
}

// Celsius to Fahrenheit & Kelvin
document.getElementById("celcius").addEventListener("input", function () {
  let celcius = parseFloat(this.value);
  let fahrenheit = (celcius * 9) / 5 + 32;
  let kelvin = celcius + 273.15;

  document.getElementById("fahrenheit").value = removeTrailingZeros(fahrenheit);
  document.getElementById("kelvin").value = removeTrailingZeros(kelvin);
});

// Fahrenheit to Celcius & Kelvin
document.getElementById("fahrenheit").addEventListener("input", function () {
  let fahrenheit = parseFloat(this.value);
  let celcius = ((fahrenheit - 32) * 5) / 9;
  let kelvin = celcius + 273.15;

  document.getElementById("celcius").value = removeTrailingZeros(celcius);
  document.getElementById("kelvin").value = removeTrailingZeros(kelvin);
});

// Kelvin to Celcius & Fahrenheit
document.getElementById("kelvin").addEventListener("input", function () {
  let kelvin = parseFloat(this.value);
  let celcius = kelvin - 273.15;
  let fahrenheit = (celcius * 9) / 5 + 32;

  document.getElementById("celcius").value = removeTrailingZeros(celcius);
  document.getElementById("fahrenheit").value = removeTrailingZeros(fahrenheit);
});

// Clear All Values
document.querySelector(".btn-div button").addEventListener("click", function () {
  document.getElementById("celcius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("kelvin").value = "";
});
