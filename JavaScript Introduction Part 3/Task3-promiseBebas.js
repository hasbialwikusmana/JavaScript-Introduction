// 1.Cek nama
const checkName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataName = ["Rizal", "Rizky", "Rizki", "Hasbi"];
      let checkName = dataName.find((item) => {
        return item === name;
      });
      if (checkName) {
        resolve(checkName);
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

// 2.Cek umur
// const checkAge = (age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataAge = [18, 19, 20, 21, 22, 23];
//       let checkAge = dataAge.find((item) => {
//         return item === age;
//       });
//       if (checkAge) {
//         resolve(checkAge);
//       } else {
//         reject(new Error("It's not my age"));
//       }
//     }, 3000);
//   });
// };
// const dataAge = async (age) => {
//   try {
//     const result = await checkAge(age);
//     console.log(`Umur kamu adalah ${result}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// dataAge(18);

//
//
//
//
//
// 1.Cek nama
// const checkName = (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (name === "Hasbi") {
//         resolve(name);
//       } else {
//         reject(new Error("It's not my name"));
//       }
//     }, 3000);
//   });
// };
// checkName("Hasbi")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// 2.Penjumlahan nilai awal dan nilai akhir
// const addNilai = (nilaiAwal, nilaiAkhir) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (nilaiAwal && nilaiAkhir) {
//         const tambah = nilaiAwal + nilaiAkhir;
//         resolve(tambah);
//       } else {
//         reject(new Error("Nilai awal dan nilai akhir harus diisi"));
//       }
//     }, 3000);
//   });
// };

// const addData = async (nilaiAwal, nilaiAkhir) => {
//   try {
//     const result = await addNilai(nilaiAwal, nilaiAkhir);
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("Program selesai!");
//   }
// };
// addData(30, 20);
