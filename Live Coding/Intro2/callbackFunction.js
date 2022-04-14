// callback function
// berfungsi untuk membuat function yang bisa di panggil lagi

const printName = (text) => {
    console.log(`Hello nama saya adalah ${text} salam kenal`);
}

const sayHello = (name, callback) => {
    const result = `Mr.${name}`;
    callback(result);
}
// sayHello('Hasbi', printName);

sayHello('Hasbi', (text)=>{
    let result = ''
    result += 'hello, '
    result += 'my name is'
    result += text
    console.log(result);
});

const sumPrice = (price1, price2, callback) => {
    const result = price1 + price2;
    callback(result);
}
sumPrice(100, 200, (totalPrice)=>{
    const format = `Rp. ${totalPrice}.-`;
    console.log(format);
});