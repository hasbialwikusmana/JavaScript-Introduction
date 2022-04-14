const name = "Hasbi";
const age = 23;

// multi line
// 1. Saya ingin belajar programmer
// 2. Saya ingin belajar programmer
// 3. Saya ingin belajar programmer

// console.log('1. Saya ingin belajar programmer\n2. Saya ingin belajar programmer\n3. Saya ingin belajar programmer');
const template = `1. Saya ingin belajar programmer
2. Saya ingin belajar programmer
3. Saya ingin belajar programmer`;
// console.log(template);

// Embedded Expression
const nilaiMtk = 90;
const nilaiBhsIndonesia = 80;

// nilai mtk saya adalah 90 dan nilai bhs indonesia saya adalah 80

// Tanpa template literal
// const result = "nilai mtk saya adalah " + nilaiMtk + " dan nilai bhs indonesia saya adalah " + nilaiBhsIndonesia;
// Dengan template literal
// const result1 = `nilai mtk saya adalah ${nilaiMtk} dan nilai bhs indonesia saya adalah ${nilaiBhsIndonesia}`;

// Jumlah nilai saya 170 dan rata-rata nilai saya adalah 85 dan nilai rata2 lebih besar 80 maka saya lulus

// tanpa template literal
const result = "jumlah nilai saya"+(nilaiMtk+nilaiBhsIndonesia) + " dan rata-rata nilai saya adalah " + (nilaiMtk+nilaiBhsIndonesia)/2;
// dengan template literal
const result1 = `jumlah nilai saya ${nilaiMtk+nilaiBhsIndonesia} dan rata-rata nilai saya adalah ${(nilaiMtk+nilaiBhsIndonesia)/2} dan saya ${(nilaiMtk+nilaiBhsIndonesia)/2 > 80 ? "lulus" : "tidak lulus"}`;
console.log(result1);