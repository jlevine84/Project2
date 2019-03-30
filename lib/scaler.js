//! This function scales ingredients for recipes based on desired serving size:
const Scaler = (currentServingSize, desiredServingSize) => {
  let newValue;
  let servingOneToFour = [1, 2, 3, 4];
  let servingFourToEight = [1, 2, 3, 4, 5, 6, 7, 8];
  let servingParty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (currentServingSize === servingOneToFour.length) {
    if (desiredServingSize === servingFourToEight.length) {
      newValue = currentServingSize * 2;
    }
    if (desiredServingSize === servingParty.length) {
      newValue = currentServingSize * 3;
    }
  }
  if (currentServingSize === servingFourToEight.length) {
    if (desiredServingSize === servingOneToFour.length) {
      newValue = currentServingSize / 2;
    }
    if (desiredServingSize === servingParty.length) {
      newValue = currentServingSize * 1.5;
    }
  }
  if (currentServingSize === servingParty.length) {
    if (desiredServingSize === servingOneToFour.length) {
      newValue = currentServingSize / 3;
    }
    if (desiredServingSize === servingFourToEight.length) {
      newValue = currentServingSize / 1.5;
    }
  }
  return newValue;
};

module.export = Scaler;
