// This function converts temperature measurement types:
function convertTemperatureTypes(currentTemp, currentType, desiredType) {
	// Converts from Fahrenheit to either Celsius or Kelvin:
	if (currentType === 'fahrenheit' || 'f') {
		if (desiredType === 'celsius' || 'c') {
			const fahrenheitToCelsius = ((currentTemp - 32) * 5) / 9;
			return fahrenheitToCelsius;
		}
		if (desiredType === 'kelvin' || 'k') {
			const fahrenheitToKelvin = ((currentTemp - 32) * 5) / 9 + 273.15;
			return fahrenheitToKelvin;
		}
	}
	// Converts from Celsius to either Fahrenheit or Kelvin:
	if (currentType === 'celsius' || 'c') {
		if (desiredType === 'fahrenheit' || 'f') {
			const celsiusToFahrenheit = (currentTemp * 9) / 5 + 32;
			return celsiusToFahrenheit;
		}
		if (desiredType === 'kelvin' || 'k') {
			const celsiusToKelvin = currentTemp + 273.15;
			return celsiusToKelvin;
		}
	}
	// Converts from Kelvin to either Fahrenheit or Celsius:
	if (currentType === 'kelvin' || 'k') {
		if (desiredType === 'fahrenheit' || 'f') {
			const kelvinToFahrenheit = ((currentTemp - 273.15) * 9) / 5 + 32;
			return kelvinToFahrenheit;
		}
		if (desiredType === 'celsius' || 'c') {
			const kelvinToCelsius = currentTemp - 273.15;
			return kelvinToCelsius;
		}
	}
}

// This function converts weight (mass) measurement types:
function convertMassTypes(currentWeight, currentType, desiredType) {
	// Converts from pounds to other weight types:
	if (currentType === 'pounds' || 'lb') {
		if (desiredType === 'kilograms' || 'kg') {
			const poundsToKilograms = currentWeight / 2.2046;
			return poundsToKilograms;
		}
		if (desiredType === 'ounces' || 'oz') {
			const poundsToOunces = currentWeight * 16;
			return poundsToOunces;
		}
		if (desiredType === 'grams' || 'g') {
			const poundsToGrams = currentWeight / 0.0022046;
			return poundsToGrams;
		}
		if (desiredType === 'stones' || 'st') {
			const poundsToStones = currentWeight * 0.071429;
			return poundsToStones;
		}
	}
	// Converts from kilograms to other weight types:
	if (currentType === 'kilograms' || 'kg') {
		if (desiredType === 'pounds' || 'lb') {
			const kilogramsToPounds = currentWeight * 2.2046;
			return kilogramsToPounds;
		}
		if (desiredType === 'ounces' || 'oz') {
			const kilogramsToOunces = currentWeight * 35.274;
			return kilogramsToOunces;
		}
		if (desiredType === 'grams' || 'g') {
			const kilogramsToGrams = currentWeight * 1000;
			return kilogramsToGrams;
		}
		if (desiredType === 'stones' || 'st') {
			const kilogramsToStones = currentWeight * 0.1574;
			return kilogramsToStones;
		}
	}
	// Converts from ounces to other weight types:
	if (currentType === 'ounces' || 'oz') {
		if (desiredType === 'pounds' || 'lb') {
			const ouncesToPounds = currentWeight * 0.0625;
			return ouncesToPounds;
		}
		if (desiredType === 'kilograms' || 'kg') {
			const ouncesToKilograms = currentWeight / 35.274;
			return ouncesToKilograms;
		}
		if (desiredType === 'grams' || 'g') {
			const ouncesToGrams = currentWeight / 0.035274;
			return ouncesToGrams;
		}
		if (desiredType === 'stones' || 'st') {
			const ouncesToStones = currentWeight * 0.0044643;
			return ouncesToStones;
		}
	}
	// Converts from grams to other weight types:
	if (currentType === 'grams' || 'g') {
		if (desiredType === 'pounds' || 'lb') {
			const gramsToPounds = currentWeight * 0.0022046;
			return gramsToPounds;
		}
		if (desiredType === 'kilograms' || 'kg') {
			const gramsToKilograms = currentWeight / 1000;
			return gramsToKilograms;
		}
		if (desiredType === 'ounces' || 'oz') {
			const gramsToOunces = currentWeight * 0.035274;
			return gramsToOunces;
		}
		if (desiredType === 'stones' || 'st') {
			const gramsToStones = currentWeight * 0.00015747;
			return gramsToStones;
		}
	}
	// Converts from stones to other weight types:
	if (currentType === 'stones' || 'st') {
		if (desiredType === 'pounds' || 'lb') {
			const stonesToPounds = currentWeight * 14;
			return stonesToPounds;
		}
		if (desiredType === 'kilograms' || 'kg') {
			const stonesToKilograms = currentWeight / 0.15747;
			return stonesToKilograms;
		}
		if (desiredType === 'ounces' || 'oz') {
			const stonesToOunces = currentWeight * 224;
			return stonesToOunces;
		}
		if (desiredType === 'grams' || 'g') {
			const stonesToGrams = currentWeight / 0.00015747;
			return stonesToGrams;
		}
	}
}

// This function converts length measurement types (currently just cm and in):
function convertLengthTypes(currentLength, currentType, desiredType) {
	if (currentType === 'inches' || 'in') {
		if (desiredType === 'centimeters' || 'cm') {
			const inchesToCentimeters = currentLength / 0.3937;
			return inchesToCentimeters;
		}
	}
	if (currentType === 'centimeters' || 'cm') {
		if (desiredType === 'inches' || 'in') {
			const centimetersToInches = currentLength * 0.3937;
			return centimetersToInches;
		}
	}
}

// This function converts volume measurement types:
function convertVolumeTypes(currentVolume, currentType, desiredType) {
	// Converts from teaspoon to other commonly used cooking measurement types:
	if (currentType === 'teaspoon' || 't' || 'tsp') {
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const teaspoonToTablespoon = currentVolume / 3;
			return teaspoonToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const teaspoonToFluidOunce = currentVolume / 6;
			return teaspoonToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const teaspoonToGill = currentVolume / 24;
			return teaspoonToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const teaspoonToCup = currentVolume / 48;
			return teaspoonToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const teaspoonToPint = currentVolume / 96;
			return teaspoonToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const teaspoonToQuart = currentVolume / 192;
			return teaspoonToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const teaspoonToGallon = currentVolume / 768;
			return teaspoonToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const teaspoonToMilliliter = currentVolume * 4.929;
			return teaspoonToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const teaspoonToCentiliter = currentVolume / 2.029;
			return teaspoonToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const teaspoonToDeciliter = currentVolume / 20.288;
			return teaspoonToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const teaspoonToLiter = currentVolume / 202.884;
			return teaspoonToLiter;
		}
	}
	// Converts from tablespoon to other commonly used cooking measurement types:
	if (currentType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const tablespoonToTeaspoon = currentVolume * 3;
			return tablespoonToTeaspoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const tablespoonToFluidOunce = currentVolume / 2;
			return tablespoonToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const tablespoonToGill = currentVolume / 8;
			return tablespoonToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const tablespoonToCup = currentVolume / 16;
			return tablespoonToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const tablespoonToPint = currentVolume / 32;
			return tablespoonToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const tablespoonToQuart = currentVolume / 64;
			return tablespoonToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const tablespoonToGallon = currentVolume / 256;
			return tablespoonToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const tablespoonToMilliliter = currentVolume * 14.787;
			return tablespoonToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const tablespoonToCentiliter = currentVolume * 1.479;
			return tablespoonToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const tablespoonToDeciliter = currentVolume / 6.763;
			return tablespoonToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const tablespoonToLiter = currentVolume / 67.628;
			return tablespoonToLiter;
		}
	}
	// Converts from fluid ounce to other commonly used cooking measurement types:
	if (currentType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const fluidOunceToTeaspoon = currentVolume * 6;
			return fluidOunceToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const fluidOunceToTablespoon = currentVolume * 2;
			return fluidOunceToTablespoon;
		}
		if (desiredType === 'gill' || 'teacup') {
			const fluidOunceToGill = currentVolume / 4;
			return fluidOunceToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const fluidOunceToCup = currentVolume / 8;
			return fluidOunceToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const fluidOunceToPint = currentVolume / 16;
			return fluidOunceToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const fluidOunceToQuart = currentVolume / 32;
			return fluidOunceToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const fluidOunceToGallon = currentVolume / 128;
			return fluidOunceToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const fluidOunceToMilliliter = currentVolume * 29.574;
			return fluidOunceToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const fluidOunceToCentiliter = currentVolume * 2.957;
			return fluidOunceToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const fluidOunceToDeciliter = currentVolume / 3.381;
			return fluidOunceToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const fluidOunceToLiter = currentVolume / 33.814;
			return fluidOunceToLiter;
		}
	}
	// Converts from gill to other commonly used cooking measurement types:
	if (currentType === 'gill' || 'teacup') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const gillToTeaspoon = currentVolume * 24;
			return gillToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const gillToTablespoon = currentVolume * 8;
			return gillToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const gillToFluidOunce = currentVolume * 4;
			return gillToFluidOunce;
		}
		if (desiredType === 'cup' || 'c') {
			const gillToCup = currentVolume / 2;
			return gillToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const gillToPint = currentVolume / 4;
			return gillToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const gillToQuart = currentVolume / 8;
			return gillToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const gillToGallon = currentVolume / 32;
			return gillToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const gillToMilliliter = currentVolume * 118.294;
			return gillToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const gillToCentiliter = currentVolume * 11.829;
			return gillToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const gillToDeciliter = currentVolume * 1.183;
			return gillToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const gillToLiter = currentVolume / 8.454;
			return gillToLiter;
		}
	}
	// Converts from cup to other commonly used cooking measurement types:
	if (currentType === 'cup' || 'c') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const cupToTeaspoon = currentVolume * 48;
			return cupToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const cupToTablespoon = currentVolume * 16;
			return cupToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const cupToFluidOunce = currentVolume * 8;
			return cupToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const cupToGill = currentVolume * 2;
			return cupToGill;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const cupToPint = currentVolume / 2;
			return cupToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const cupToQuart = currentVolume / 4;
			return cupToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const cupToGallon = currentVolume / 16;
			return cupToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const cupToMilliliter = currentVolume * 236.588;
			return cupToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const cupToCentiliter = currentVolume * 23.659;
			return cupToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const cupToDeciliter = currentVolume * 2.366;
			return cupToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const cupToLiter = currentVolume / 4.227;
			return cupToLiter;
		}
	}
	// Converts from pint to other commonly used cooking measurement types:
	if (currentType === 'pint' || 'pt' || 'p' || 'fl pt' || 'fluid pint' || 'fluid pt' || 'fluid p') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const pintToTeaspoon = currentVolume * 96;
			return pintToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const pintToTablespoon = currentVolume * 32;
			return pintToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const pintToFluidOunce = currentVolume * 16;
			return pintToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const pintToGill = currentVolume * 4;
			return pintToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const pintToCup = currentVolume * 2;
			return pintToCup;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const pintToQuart = currentVolume / 2;
			return pintToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const pintToGallon = currentVolume / 8;
			return pintToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const pintToMilliliter = currentVolume * 473.176;
			return pintToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const pintToCentiliter = currentVolume * 47.318;
			return pintToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const pintToDeciliter = currentVolume * 4.732;
			return pintToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const pintToLiter = currentVolume / 2.113;
			return pintToLiter;
		}
	}
	// Converts from quart to other commonly used cooking measurement types:
	if (
		currentType === 'quart' ||
		'qt' ||
		'q' ||
		'fl qt' ||
		'fluid quart' ||
		'fluid qt' ||
		'fluid q'
	) {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const quartToTeaspoon = currentVolume * 192;
			return quartToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const quartToTablespoon = currentVolume * 64;
			return quartToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const quartToFluidOunce = currentVolume * 32;
			return quartToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const quartToGill = currentVolume * 8;
			return quartToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const quartToCup = currentVolume * 4;
			return quartToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const quartToPint = currentVolume * 2;
			return quartToPint;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const quartToGallon = currentVolume / 4;
			return quartToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const quartToMilliliter = currentVolume * 946.353;
			return quartToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const quartToCentiliter = currentVolume * 94.635;
			return quartToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const quartToDeciliter = currentVolume * 9.464;
			return quartToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const quartToLiter = currentVolume / 1.057;
			return quartToLiter;
		}
	}
	// Converts from gallon to other commonly used cooking measurement types:
	if (currentType === 'gallon' || 'gal' || 'g') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const gallonToTeaspoon = currentVolume * 768;
			return gallonToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const gallonToTablespoon = currentVolume * 256;
			return gallonToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const gallonToFluidOunce = currentVolume * 128;
			return gallonToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const gallonToGill = currentVolume * 32;
			return gallonToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const gallonToCup = currentVolume * 16;
			return gallonToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const gallonToPint = currentVolume * 8;
			return gallonToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const gallonToQuart = currentVolume * 4;
			return gallonToQuart;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const gallonToMilliliter = currentVolume * 3785.412;
			return gallonToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const gallonToCentiliter = currentVolume * 378.541;
			return gallonToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const gallonToDeciliter = currentVolume * 37.854;
			return gallonToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const gallonToLiter = currentVolume * 3.785;
			return gallonToLiter;
		}
	}
	// Converts from milliliter to other commonly used cooking measurement types:
	if (currentType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const milliliterToTeaspoon = currentVolume / 4.929;
			return milliliterToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const milliliterToTablespoon = currentVolume / 14.787;
			return milliliterToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const milliliterToFluidOunce = currentVolume / 29.574;
			return milliliterToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const milliliterToGill = currentVolume / 118.294;
			return milliliterToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const milliliterToCup = currentVolume / 236.588;
			return milliliterToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const milliliterToPint = currentVolume / 473.176;
			return milliliterToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const milliliterToQuart = currentVolume / 946.353;
			return milliliterToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const milliliterToGallon = currentVolume / 3785.412;
			return milliliterToGallon;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const milliliterToCentiliter = currentVolume / 10;
			return milliliterToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const milliliterToDeciliter = currentVolume / 100;
			return milliliterToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const milliliterToLiter = currentVolume / 1000;
			return milliliterToLiter;
		}
	}
	// Converts from centiliter to other commonly used cooking measurement types:
	if (currentType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const centiliterToTeaspoon = currentVolume * 2.029;
			return centiliterToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const centiliterToTablespoon = currentVolume / 1.479;
			return centiliterToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const centiliterToFluidOunce = currentVolume / 2.957;
			return centiliterToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const centiliterToGill = currentVolume / 11.829;
			return centiliterToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const centiliterToCup = currentVolume / 23.659;
			return centiliterToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const centiliterToPint = currentVolume / 47.318;
			return centiliterToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const centiliterToQuart = currentVolume / 94.635;
			return centiliterToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const centiliterToGallon = currentVolume / 378.541;
			return centiliterToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const centiliterToMilliliter = currentVolume * 10;
			return centiliterToMilliliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const centiliterToDeciliter = currentVolume / 10;
			return centiliterToDeciliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const centiliterToLiter = currentVolume / 100;
			return centiliterToLiter;
		}
	}
	// Converts from deciliter to other commonly used cooking measurement types:
	if (currentType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const deciliterToTeaspoon = currentVolume * 20.288;
			return deciliterToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const deciliterToTablespoon = currentVolume * 6.763;
			return deciliterToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const deciliterToFluidOunce = currentVolume * 3.381;
			return deciliterToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const deciliterToGill = currentVolume / 1.183;
			return deciliterToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const deciliterToCup = currentVolume / 2.366;
			return deciliterToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const deciliterToPint = currentVolume / 4.732;
			return deciliterToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const deciliterToQuart = currentVolume / 9.464;
			return deciliterToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const deciliterToGallon = currentVolume / 37.854;
			return deciliterToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const deciliterToMilliliter = currentVolume * 100;
			return deciliterToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const deciliterToCentiliter = currentVolume * 10;
			return deciliterToCentiliter;
		}
		if (desiredType === 'liter' || 'litre' || 'L' || 'l') {
			const deciliterToLiter = currentVolume / 10;
			return deciliterToLiter;
		}
	}
	// Converts from liter to other commonly used cooking measurement types:
	if (currentType === 'liter' || 'litre' || 'L' || 'l') {
		if (desiredType === 'teaspoon' || 't' || 'tsp') {
			const literToTeaspoon = currentVolume * 202.884;
			return literToTeaspoon;
		}
		if (desiredType === 'tablespoon' || 'T' || 'tbs' || 'tbsp' || 'tbl') {
			const literToTablespoon = currentVolume * 67.628;
			return literToTablespoon;
		}
		if (desiredType === 'fluid ounce' || 'fl oz' || 'fluid oz') {
			const literToFluidOunce = currentVolume * 33.814;
			return literToFluidOunce;
		}
		if (desiredType === 'gill' || 'teacup') {
			const literToGill = currentVolume * 8.454;
			return literToGill;
		}
		if (desiredType === 'cup' || 'c') {
			const literToCup = currentVolume * 4.227;
			return literToCup;
		}
		if (
			desiredType === 'pint' ||
			'pt' ||
			'p' ||
			'fl pt' ||
			'fluid pint' ||
			'fluid pt' ||
			'fluid p'
		) {
			const literToPint = currentVolume * 2.113;
			return literToPint;
		}
		if (
			desiredType === 'quart' ||
			'qt' ||
			'q' ||
			'fl qt' ||
			'fluid quart' ||
			'fluid qt' ||
			'fluid q'
		) {
			const literToQuart = currentVolume * 1.057;
			return literToQuart;
		}
		if (desiredType === 'gallon' || 'gal' || 'g') {
			const literToGallon = currentVolume / 3.785;
			return literToGallon;
		}
		if (desiredType === 'milliliter' || 'millilitre' || 'cc' || 'mL' || 'ml') {
			const literToMilliliter = currentVolume * 1000;
			return literToMilliliter;
		}
		if (desiredType === 'centiliter' || 'centilitre' || 'cL' || 'cl') {
			const literToCentiliter = currentVolume * 100;
			return literToCentiliter;
		}
		if (desiredType === 'deciliter' || 'decilitre' || 'dL' || 'dl') {
			const literToDeciliter = currentVolume * 10;
			return literToDeciliter;
		}
	}
}

// This function converts mass to volume (approximately) and vice versa:
/*
  function convertMassAndVolume(currentValue, currentType, desiredType) {}
   */

/*
! Volume
*American:
teaspoon (also t or tsp.)
tablespoon (also T, tbl., tbs., or tbsp.)
fluid ounce (also fl oz)
gill (about 1/2 cup)
cup (also c)
pint (also p, pt, or fl pt - Specify Imperial or US)
quart (also q, qt, or fl qt - Specify Imperial or US)
gallon (also g or gal - Specify Imperial or US)
*Metric:
ml, also milliliter, millilitre, cc (and mL only in the US, Canada and Australia).
cl, also centiliter
dl, also deciliter, decilitre (and dL only in the US, Canada and Australia).
l, also liter, litre, (and L only in the US, Canada and Australia).
! Mass and Weight
pound (also lb or #)
ounce (also oz)
mg (also milligram or milligramme)
g (also gram or gramme)
kg (also kilogram or kilogramme)
st (also stones)
! Length
mm (also millimeter or millimetre)
cm (also centimeter or centimetre)
m (also meter or metre)
inch (also in or ")
! Temperature
Formula to convert Fahrenheit to Celsius: (32°F − 32) × 5/9 = 0°C
Formula to convert Celsius to Fahrenheit: (0°C × 9/5) + 32 = 32°F
Oven temperatures may be quoted in degrees in Celsius (International), Fahrenheit (Canada and USA) or by gas mark (UK and France).
Gas mark	 Fahrenheit	  Celsius    Verbal
n/a	      150°	      66°	    Drying
n/a	      158°	      70°	    Drying
n/a	      175°	      79°	    Drying
n/a	      176°	      80°       Drying
n/a	      194°	      90°       Drying
1/4	      200°	      93°	    Very Slow/Very Low
1/4	      212°	      100°	    Very Slow/Very Low
1/4	      225°	      107°	    Very Slow/Very Low
1/4	      230°	      110°	    Very Slow/Very Low
1/2	      248°	      120°	    Very Slow/Very Low
1/2	      250°	      121°	    Very Slow/Very Low
1/2	      266°	      130°	    Very Slow/Very Low
1	         275°	      135°	    Slow/Low
1	         284°	      140°	    Slow/Low
2	         300°	      149°	    Slow/Low
2	         302°	      150°	    Slow/Low
3	         320°	      160°	    Moderately Slow/Warm
3	         325°	      163°	    Moderately Slow/Warm
3	         338°	      170°	    Moderately Slow/Warm
4	         350°	      177°	    Moderate/Medium
4	         356°	      180°	    Moderate/Medium
5	         374°	      190°	    Moderate/Moderately Hot
5	         375°	      191°	    Moderate/Moderately Hot
6	         392°	      200°	    Moderately Hot
6	         400°	      204°	    Moderately Hot
7	         425°	      218°	    Hot
7	         428°	      220°	    Hot
8	         446°	      230°	    Hot/Very Hot
8	         450°	      232°	    Hot/Very Hot
9	         464°	      240°	    Very Hot
9	         475°	      246°	    Very Hot
9	         482°	      250°	    Very Hot
10	         500°	      260°	    Extremely Hot
n/a	      518°	      270°	    Extremely Hot
n/a	      525°	      274°	    Extremely Hot
Metric Units
Metric units are made up of a base unit and a scale modifier. Each type of measurement has its own base unit. The modifiers are shared between all units. The relevant base units for cooking are:
Mass: gram (g)
Length: meter (m)
Volume: cubic meter (m3)
Commonly used prefix modifiers are:
1/1000 milli (m)
1/100 centi (c)
1/10 deci (d)
100 hecto (h)
1000 kilo (k)
In cooking the old unit Liter (l) is commonly used to measure volume. One liter is (exactly) equal to 0.001 cubic meters, or 1 cubic decimeter, written like: 1 l = 1 dm3. The prefix modifiers can be used with any unit and thus 1 cl (centiliter) is equal to 1/100 of a liter. The unit for volume is derived from the unit for length. Two lengths forms an area, which is length x length and has the derived unit square meter (m2). Three lengths forms the volume metric m3. This has the consequence that a m3 is equal to 1000 dm3, that is 103 = 10x10x10.
Examples relevant for cooking:
1 l = 10 dl = 100 cl = 1000 ml = 1 dm3 = 0.264 US gallons
1 kg = 10 hg = 1000 g = 2.2 pounds
1 cm = 0.39 inches
Some recipes in Wikibooks Cookbook use American measurement units (pounds and ounces, Fahrenheit, fluid ounces and pints, etc.) and some recipes use metric units (grammes and kilograms, Celsius, milliliter, etc.). An attempt to ensure that all Cookbook recipes use metric units (alone or alongside American units) is an ongoing job. A list of recipes which have been confirmed as having metric units can be found here.
! Avoirdupois Conversion Reference:
Volume
American:
1T = 3t
1 fl oz = 2T
1 gill = 4 fl oz
1 cup = 8 fl oz
1 pint = 2 cups
1 quart = 2 pints
1 gal = 3.78541 liters / 4 qts / 8 pints / 16 cups / 128 fl oz / 256 T / 768 t
Metric: 
1 milliliter (ml) = 0.001 liters
1 centiliter (cl) = 0.01 liters
1 deciliter (dl) = 0.1 liters
1 liter (l) = 0.264172 gal / 1.05669 quarts / 2.11338 pints / 4.22675 cups / 33.814 ounces / 67.628 T / 202.884 t; 
Mass
1 lb = 16 oz
! Mass/Volume conversions
Approximate conversions based on water density. These conversions are useful for more than just water. Although other things have different densities, they are good enough for most estimates.
1 fl oz = 1 oz
1 pint = 1 lb
2 cups = 1 lb
Water has a density of exactly 1 g/cm³
1 mL = 1 g
1 L = 1 kg
An American stick of butter is 1/4 lb, and is divided into 8 tablespoons. So, 1 tbsp butter = 1/2 oz butter.
*/
