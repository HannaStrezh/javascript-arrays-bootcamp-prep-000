var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  return[element,...array];
}
// element goes first because we want to add the element to the //beginning of the array
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return[...array, element];
  
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array,index){
  return [i];
  
}