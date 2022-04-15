// create function seleksi nilai
// input: nilai awal, nilai akhir, dan data array
// output: array yang berisi nilai yang lebih besar dari nilai awal dan lebih kecil dari nilai akhir

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (typeof(nilaiAwal) !== "number" || 
        typeof(nilaiAkhir) !== "number" || 
        typeof(dataArray) !== "object") {
        console.log("Nilai yang dimasukan tidak sesuai!");
        
    }else if (nilaiAwal < nilaiAkhir && dataArray.length >= 5) {
    const result = dataArray.filter((value) => value > nilaiAwal && value < nilaiAkhir).sort(function (a, b) {return a - b;});

      if (result == 0) {
        console.log("Nilai tidak ditemukan");
      } else {
        console.log(result);
      }
    } else if (nilaiAwal > nilaiAkhir) {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else if (dataArray.length < 5) {
      console.log("Jumlah angka dalam dataArray kurang dari 5");
    }
  }

  // seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
//   Output:
//   [8, 14, 17]
  
  // seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
//   Output:
//   “Nilai akhir harus lebih besar dari nilai awal”
  
  // seleksiNilai(5, 17 , [2, 25, 4])
//   Output:
//   “Jumlah angka dalam dataArray harus lebih dari 5”
  
  // seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
//   Output:
//   “Nilai tidak ditemukan”
  
