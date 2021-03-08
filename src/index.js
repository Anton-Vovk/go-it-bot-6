import users from "./users.js";

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

// ----------------------------4-5----------------------
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100)); //500

// ----------------------------6----------------------
// const calculateTotalPrice = (orderedItems)=> {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// ----------------------------7----------------------
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]

// ----------------------------8----------------------
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     return commonElements;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]

// ----------------------------9----------------------
// const changeEven = (numbers, value) => {
//   const newArray = [];
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   numbers.forEach((number) => {
//     number % 2 === 0 ? newArray.push(number + value) : newArray.push(number);
//   });
//   return newArray;
// };
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]

// ----------------------------10----------------------
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// ----------------------------11----------------------
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log(titles);

// ----------------------------12----------------------
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);
// console.log(genres); //[ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ]

// ----------------------------13-14---------------------
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
console.log(getUserNames(users));

const getUserEmails = (users) => {
  return users.map((user) => user.email);
};
console.log(getUserEmails(users));

// ----------------------------15----------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0 );
// const oddNumbers = numbers.filter(number => number % 2 !== 0)
// console.log(evenNumbers);
// console.log(oddNumbers);

// ----------------------------16----------------------
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];

//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genres, index, book) => book.indexOf(genres) === index);
//   console.log(uniqueGenres);

// ----------------------------17----------------------
//   const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ----------------------------18----------------------
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue"));

// ----------------------------19----------------------
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age > minAge && user.age < maxAge);
};
console.log(getUsersWithAge(users, 20, 35));

// ----------------------------20----------------------

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user);
};
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, ""));

// ----------------------------21----------------------
const getFriends = (users) => {
  const allFriens = users.flatMap((user) => user.friends);
  const uniqueFriends = allFriens.filter(
    (user, index, friend) => friend.indexOf(user) === index
  );
  return uniqueFriends;
};
console.log(getFriends(users));

// ----------------------------22----------------------
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
};
console.log(getActiveUsers(users));

// ----------------------------23----------------------
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false);
};
console.log(getInactiveUsers(users));

// ----------------------------23----------------------
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR = "Роберт Шекли";

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);
console.log(bookWithTitle, bookByAuthor);

// ----------------------------24----------------------
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
// ----------------------------25----------------------

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

console.log(eachElementInFirstIsEven); // true
console.log(eachElementInSecondIsOdd); // true
console.log(eachElementInThirdIsOdd); //false
// every(callback) проверяет проходит ли все элементы массива тест 
//предоставляемый коллбек - функцией.Возвращает true или false

// ----------------------------26----------------------
const isEveryUserActive = (users) => {
   return users.every(user => user.isActive === true);
};
console.log(isEveryUserActive(users)); //false

// ----------------------------27----------------------
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some(value=> value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value=> value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value=> value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);
// some(callback) проверяет проходит ли хотя бы один элемент массива тест 
//предоставляемый коллбек - функцией.Возвращает true или false

// ----------------------------28----------------------
const isAnyUserActive = users => {
  return users.some(user => user.isActive === true );
};

// ----------------------------29----------------------

