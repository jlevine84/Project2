// This function converts temperature measurement types:
const ConvertTemperatureTypes = (currentTemp, currentType, desiredType) => {
  let newValue;
  // Converts from Fahrenheit to either Celsius or Kelvin:
  if (currentType === 'fahrenheit' || 'f' || 'F') {
    if (desiredType === 'celsius' || 'c' || 'C') {
      newValue = ((currentTemp - 32) * 5) / 9;
    }
    if (desiredType === 'kelvin' || 'k' || 'K') {
      newValue = ((currentTemp - 32) * 5) / 9 + 273.15;
    }
  }
  // Converts from Celsius to either Fahrenheit or Kelvin:
  if (currentType === 'celsius' || 'c' || 'C') {
    if (desiredType === 'fahrenheit' || 'f' || 'F') {
      newValue = (currentTemp * 9) / 5 + 32;
    }
    if (desiredType === 'kelvin' || 'k' || 'K') {
      newValue = currentTemp + 273.15;
    }
  }
  // Converts from Kelvin to either Fahrenheit or Celsius:
  if (currentType === 'kelvin' || 'k' || 'K') {
    if (desiredType === 'fahrenheit' || 'f' || 'F') {
      newValue = ((currentTemp - 273.15) * 9) / 5 + 32;
    }
    if (desiredType === 'celsius' || 'c' || 'C') {
      newValue = currentTemp - 273.15;
    }
  }
  return newValue;
};

module.exports = ConvertTemperatureTypes;
