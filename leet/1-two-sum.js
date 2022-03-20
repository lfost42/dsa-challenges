const twoSum = (array, sum) => {
  let numberMap = new Map();
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (numberMap.has(sum - element))
      return [i, numberMap.get(sum - element)];
    else numberMap.set(element, i);
  }
  return [];
}