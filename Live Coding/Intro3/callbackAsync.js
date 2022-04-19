// const getProduct =(callback)=>{
//     let makanan =[]
//     setTimeout(()=>{
//         // sudah dapat value dari DB
//         makanan = ['nasi goreng', 'nasi padang', 'nasi uduk']
//         callback(makanan)
//     }, 300)
// }
// getProduct((data)=>{
//     data.map((item, index)=>{
//         console.log(`makan ${index} nilai adlalah ${item}`);
//     })
// })

const getProduct = () => {
  let makanan = [];
  setTimeout(() => {
    // sudah dapat value dari DB
    makanan = ["nasi goreng", "nasi padang", "nasi uduk"];
    return makanan;
    // callback(makanan)
  }, 300);
};
// console.log(ge);
const result = getProduct();
console.log(result);
