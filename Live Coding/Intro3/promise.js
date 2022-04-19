//
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
panggilBilanganGenap()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
