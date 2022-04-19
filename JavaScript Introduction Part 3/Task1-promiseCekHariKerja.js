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

//then berfungsi untuk handler ketika cek bernilai true
//catch berfungsi untuk handler ketika cek bernilai false

// cekHariKerja("senin")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// try memungkinkan untuk mengecek atau memeriksa block agar mengetahui error atau tidak
// // catch adalah block yang menampilkan error jika pada try terjadi error
// // sedangkan finally akan menjalankan saat true ataupun false

const jadwalKerja = async () => {
  try {
    const result = await cekHariKerja("sabtu");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Program selesai!");
  }
};
jadwalKerja();
