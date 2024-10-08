const formatedNumber = (value: number) => {
  let valueString = value.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(valueString)) valueString = valueString.replace(pattern, '$1.$2');
  return valueString;
};

export default formatedNumber;
