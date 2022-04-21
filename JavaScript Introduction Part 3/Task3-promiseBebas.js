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
const add = (firstNumber, secondNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstNumber && secondNumber) {
        resolve(firstNumber + secondNumber);
      } else {
        reject(new Error("Nilai awal dan nilai akhir harus diisi"));
      }
    }, 3000);
  });
};

const addData = async (firstNumber, secondNumber) => {
  try {
    const result = await add(firstNumber, secondNumber);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Program selesai!");
  }
};
addData(10, 20);

// nilai();
