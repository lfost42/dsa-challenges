const twoSum = (array, goal) => {
  let numberMap = new Map();
  for (let index = 0; index < array.length; index++) {
    let el = array[index];
    if (numberMap.has(goal - el))
      return [index, numberMap.get(goal - el)];
    else numberMap.set(el, index);
  }
  return [];
}