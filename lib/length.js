// This function converts length measurement types (currently just cm and in, needs updating):
const ConvertLengthTypes = (currentLength, currentType, desiredType) => {
  let newValue;
  if (currentType === 'inches' || 'in') {
    if (desiredType === 'centimeters' || 'cm') {
      newValue = currentLength / 0.3937;
    }
  }
  if (currentType === 'centimeters' || 'cm') {
    if (desiredType === 'inches' || 'in') {
      newValue = currentLength * 0.3937;
    }
  }
  return newValue;
};

module.exports = ConvertLengthTypes;
