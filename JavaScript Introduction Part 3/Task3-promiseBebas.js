// 1.Cek nama
const checkName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Hasbi") {
        resolve(name);
      } else {
        reject(new Error("Nama kamu salah"));
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
const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(age);
      } else {
        reject(new Error("Usia kamu belum cukup"));
      }
    }, 3000);
  });
};

const checkAgeData = async (age) => {
  try {
    const result = await checkAge(age);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

checkAgeData(18);
