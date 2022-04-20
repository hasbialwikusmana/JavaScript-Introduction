// 1.Cek name
const checkName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Hasbi") {
        resolve(name);
      } else {
        reject(new Error("It's not my name"));
      }
    }, 3000);
  });
};
checkName("Hasbi")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

// 2.Penjumlahan nilai awal dan nilai akhir
// const getNilai = (nilaiAwal, nilaiAkhir, callback) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (nilaiAwal <= nilaiAkhir) {
//         resolve(callback(nilaiAwal, nilaiAkhir));
//       } else {
//         reject(new Error("Nilai awal harus lebih kecil dari nilai akhir"));
//       }
//     }, 3000);
//   });
// };

// const nilai = async () => {
//   try {
//     const result = await getNilai(32, 30, (nilaiAwal, nilaiAkhir) => {
//       return nilaiAwal + nilaiAkhir;
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// nilai();
