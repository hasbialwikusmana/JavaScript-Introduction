// destructuring dengan Array

const hobby = ['coding', 'reading', 'listening to music'];

// const newHobby = hobby[2];
// const [hobby1, hobby2, hobby3] = hobby;

// sisa nya tanpa memunculkan array yang sudah di pilih
const [hobby1, hobby2, ...hobbyLainnya] = hobby;
// console.log(hobbyLainnya);

// destructuring dengan object
const myBio = {
    name: 'fahmi',
    age: 20,
    email: 'fah@gmail.com',
    address:{
        street: 'jalan',
        city: 'jakarta'
    }
}
// tanpa destructuring
const email = myBio.email;
// console.log(email);

// dengan destructuring
const {city} = myBio.address;
// alias dari city ke kota
const {city :kota} = myBio.address;

const {address:{street}} = myBio;
// console.log(street);
// console.log(kota);

// props sebagai data sisanya selain dari name
const {name, ...props} = myBio;
console.log(props);