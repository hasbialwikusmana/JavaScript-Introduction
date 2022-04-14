// const myBio = {
//     name: 'fahmi',
//     age: 20,
//     email: 'fah@gmail.com',
//     address:{
//         street: 'jalan',
//         city: 'jakarta'
//     }
// }
// // Function destructuring
// function printBiodata({name, age, email}) {
//     console.log(`Nama saya adalah ${name} Umur saya ${age} dan email saya ${email}`);
// }
// printBiodata(myBio);

// Declaration function
// function sum(val1, val2) {
//     const total = val1 + val2;
//     return total;
// }
// const resultSum = sum(10, 20);
// console.log(resultSum);

//for function 

// const resultSum = sum(10, 20);
// console.log(resultSum);
// function sum(...rest) {
//    let result = 0;
//     for (let i = 0; i < rest.length; i++) {
//         result += rest[i];
//     }
//     return result;
// }
// const resultSum = sum(10, 20, 30, 40, 50);
// console.log(resultSum);


// Expression

// const sum = function(param1, param2) {
//     return param1 + param2;
// }

// const resultSum = sum(10, 20);
// console.log(resultSum);

// Arrow Function
// const sum = (param1, param2) => {
//     const result = param1 + param2;
//     return result;
// }
// const result = sum(10, 20);
// console.log(result);


// const latihan = (param1)=>(print)=> {
//     console.log(param1);
//     console.log(print);
// }


// ==========================

// function sum(...rest){
//     let result = 0;
//     for (let i = 0; i < rest.length; i++) {
//         result += rest[i];
//     }
//     return result;
// }
// const nilaiBudi = sum(90,100,20,30,40,50);
// const nilaiAni = sum(10, 20,100,90,40,50);
// const nilaiFahmi = sum(10, 20,30,40,50,60);

// console.log(nilaiBudi);