const panggilBilanganGenap = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = "";
      const RandomNilai = Math.floor(Math.random() * 10);
      if (RandomNilai % 2 === 0) {
        result = `Succes !! hasil ${RandomNilai} adalah nilainya genap`;
        resolve(result);
      } else {
        result = new Error(
          `Gagal !! hasil ${RandomNilai} adalah nilainya gajil`
        );
        reject(result);
      }
    }, 3000);
  });
};
// console.log(result);
const getBilanganGanji = async () => {
  try {
    console.log("code 1");
    const result = await panggilBilanganGenap();
    console.log(result);
    console.log("code 3");
    console.log("code 4");
  } catch (error) {
    console.log("catch di panggil");
    console.log(error);
  }
  console.log("hasil result");
  // finally{
  //     console.log('proses selesai');
  // }
};

getBilanganGanji();
