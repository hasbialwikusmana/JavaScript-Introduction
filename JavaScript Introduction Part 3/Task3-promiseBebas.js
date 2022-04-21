// 1.Cek nama
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
const addNilai = (nilaiAwal, nilaiAkhir) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nilaiAwal && nilaiAkhir) {
        const tambah = nilaiAwal + nilaiAkhir;
        resolve(tambah);
      } else {
        reject(new Error("Nilai awal dan nilai akhir harus diisi"));
      }
    }, 3000);
  });
};

const addData = async (nilaiAwal, nilaiAkhir) => {
  try {
    const result = await addNilai(nilaiAwal, nilaiAkhir);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};
addData(30, 20);
