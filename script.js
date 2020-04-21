// const answer = prompt('Hello!What is you name?');
// console.log('Hello,' + answer + '!How are you?');
// const num = 23;
// const str = 'Hello';
// const bool = false;
// const und = undefined;
// const n = null;

// console.log(num);
// console.log(str);
// console.log(bool);
// console.log(und);
// console.log(n);

// console.log(2 + num);
// console.log(2 + str);


// явное
// console.log(String(num));
// console.log(Number(str));
// console.log(Boolean(+str));
// не явное
// console.log('' + num);
// console.log(+str);
// console.log(!str);

// const age = prompt('Age?');
// console.log(Number(age)+100);

// const age = +prompt('Age?');
// console.log(age + 100);

// let age = prompt('Age?');
// age = Number(age);
// console.log(age+100);

// let age = +prompt('Age?');
// console.log(age+100);

// const alex = {
//     name: "Alex",
//     age: 22,
//     adress: {
//         country: 'Ukraine',
//         citi: 'Kiev',
//     },
// };

const name = 'Alex';

const a = sayHello(name, 23);

function sayHello(userName, age) {
    alert('Hello,' + userName + age);

    return 123;
}
