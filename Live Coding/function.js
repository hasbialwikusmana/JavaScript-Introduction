const myBio = {
    name: 'fahmi',
    age: 20,
    email: 'fah@gmail.com',
    address:{
        street: 'jalan',
        city: 'jakarta'
    }
}

function printBiodata({name, age, email}) {
    console.log(`Nama saya adalah ${name} Umur saya ${age} dan email saya ${email}`);
}
printBiodata(myBio);