const panggilBilanganGenap = () => {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      let result = "";
      const randomNilai = Math.floor(Math.random() * 10);
      if (randomNilai % 2 === 0) {
        result = `Success !! Hasil ${randomNilai} Bilangan Genap`;
        resolve(result);
      } else {
        result = new Error(`Failed !! Hasil ${randomNilai} Bilangan Ganjil`);
        reject(result);
      }
    }, 3000);
  });
};
const getBilanganGanjil = async () => {
  const result = await panggilBilanganGenap();
  console.log(result);
};

getBilanganGanjil();
