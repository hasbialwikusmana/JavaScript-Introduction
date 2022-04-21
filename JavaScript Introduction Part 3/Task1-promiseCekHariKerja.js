const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("senin")
  .then((result) => {
    console.log(`Hari ${result} adalah hari kerja`);
  })
  .catch((error) => {
    console.log(error);
  });

// const jadwalKerja = async (day) => {
//   try {
//     const result = await cekHariKerja(day);
//     console.log(`Hari ${result} adalah hari kerja`);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Program selesai!");
//   }
// };
// jadwalKerja("senin");

// Penggunaan then catch :
// - .then digunakan jika state promisenya fulfilled (berhasil), objectnya adalah resolve() bernilai true
// - .catch digunakan jika state promisenya rejected (gagal), objectnya adalah reject() bernilai false

// Penggunaan try catch :
// - .try digunakan untuk mencoba kode yang memungkinkan terjadinya error
// - .catch digunakan untuk menangkap error apabila terjadi error pada blok try
// // sedangkan finally akan menjalankan saat true ataupun false
