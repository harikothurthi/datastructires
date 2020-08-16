const arr = [1, 2, 3];
arr.map((value, index) => console.log(`Using Map - Value at ${index} is `, value));
arr.forEach((value, index) => console.log(`Using forEach - Value at ${index} is `, value));

const findValue = (someValue) => {
	arr.find(value => value === someValue ? console.log(`Value of ${value} exists in array ${arr}`) : console.log(`Value of ${value} does not exists in array ${arr}`));
};

const someArr = [1, 3, 5, 6];
someArr.forEach(something => findValue(something));