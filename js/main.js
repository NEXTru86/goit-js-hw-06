import users from "./users.js"

// Задание 1
// Получить массив имен всех пользователей (поле name).
    
const getUserNames = users => {
  const userNames = users.map(arr => arr.name);

  return userNames;
};

console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const usersWithEyeColor = users.filter(user => user.eyeColor === color);

  return usersWithEyeColor;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  const usersWithGender = users
    .filter(user => user.gender === gender)
    .map(user => user.name);

  return usersWithGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  const inactiveUsers = users.filter(user => !user.isActive);

  return inactiveUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find(user => user.email === email);

  return userWithEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  const arrUsers = users.filter(user => user.age > min && user.age < max);

  return arrUsers;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  const totalBalance = users.reduce((amountBalance, user) => amountBalance + user.balance, 0);

  return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

  return usersWithFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const namesSortedByFriendsCount = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

  return namesSortedByFriendsCount;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const sortedUniqueSkills = users
    .reduce((allSkills, skill) => {
      allSkills.push(...skill.skills);
  
      return allSkills;
    }, [])
    .reduce((acc, tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
        }
      return acc;
    }, [])
    .sort();

  return sortedUniqueSkills;

}

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
