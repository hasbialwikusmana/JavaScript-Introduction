let myHobby = ['swiming', 'football', 'coding'];

// memasukan array ke dalam array lain
// const myHobby2 = ['nyanyi','menari',...myHobby];

// menggabungkan 2 array
// const resultHobby = [...myHobby,...myHobby2];

// copy
const resultMyHobby = [...myHobby];
resultMyHobby[1] = 'desain';
console.log(resultMyHobby);

// menggabungkan data menggunakan spread operator
const myName = {
    name : 'fahmi',
    age : 20,
    email:"fahmi@gmail.com"
}

const friendName = {
    name : 'zarif',
    age : 20,
    address : 'jakarta'
}

// const newName = {
//     ...myName,
//     ...friendName
// }

const newName = {
    ...myName,
    age:25,
}
