
// ----------------------------1----------------------
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([100, 200, 300, 400]));//1000

// ----------------------------2----------------------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
  
//   numbers.forEach(function(number){
//     if (number > value){
//     filteredNumbers.push(number);
//     }
//   });

//     return filteredNumbers;
// }  
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)) // []

// ----------------------------3----------------------
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = []; 
  
//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   // }

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element)
//     }
//   });
  
//     return commonElements;
//   }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// ----------------------------4----------------------