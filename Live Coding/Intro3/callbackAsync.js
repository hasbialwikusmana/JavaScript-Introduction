const getProduct = (callback) => {
   let makanan = [];
   setTimeout(() => {
        makanan = ['nasi', 'soto', 'sate'];
        callback(makanan);
     }, 300);
}
getProduct((data) => {
    data.map((item, index) => {
        console.log(`makan ${index} nilai adalah ${item}`);
    });
});