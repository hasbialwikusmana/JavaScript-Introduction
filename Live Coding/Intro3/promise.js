// let janjian = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("janjian berhasil");
//   } else {
//     reject("janjian gagal");
//   }
// });

//sync
// let janjian = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let success = true;
//     if (success) {
//       resolve("janjian berhasil");
//     } else {
//       reject("janjian gagal");
//     }
//   }, 300);
// });

// let janjian = new Promise((resolve, reject) => {
//   let success = true;
//   let makanan = ["nasi", "soto", "sate"];
//   if (success) {
//     resolve(makanan);
//   } else {
//     reject("ada error ");
//   }
// });

// janjian
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(janjian);

const panggilBilanganGenap = () => {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      let result = "";
      const randomNilai = Math.floor(Math.random() * 10);
      if (randomNilai % 2 === 0) {
        result = `Success !! Hasil ${randomNilai} Bilangan Genap`;
        resolve(result);
      } else {
        result = `Failed !! Hasil ${randomNilai} Bilangan Ganjil`;
        reject(result);
      }
    }, 3000);
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
