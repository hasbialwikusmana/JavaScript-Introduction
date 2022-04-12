// percabangan if

const nilaiMtk = 60;

// if(nilaiMtk > 90){
//     console.log('Nilai anda A');
// } else if(nilaiMtk > 80){
//     console.log('Nilai anda B');
// } else if(nilaiMtk > 70){
//     console.log('Nilai anda C');
// } else if(nilaiMtk > 60){
//     console.log('Nilai anda D');
// } else if(nilaiMtk > 50){
//     console.log('Nilai anda E');
// } else {
//     console.log('Nilai anda F');
// }


// switch case
const day = 3;
let dayName = ''

// switch(day){
//     case 1:
//         dayName = 'Senin';
//         break;
//     case 2:
//         dayName = 'Selasa';
//         break;
//     case 3:
//         dayName = 'Rabu';
//         break;
//     case 4:
//         dayName = 'Kamis';
//         break;
//     case 5:
//         dayName = 'Jumat';
//         break;
//     case 6:
//         dayName = 'Sabtu';
//         break;
//     case 7:
//         dayName = 'Minggu';
//         break;
//     default:
//         dayName = 'Anda Salah Memasukkan Number Day';
//         break;
// }
// console.log(dayName);



// Ternary Operator
let grade = ''
grade =   (nilaiMtk > 90) ? 'A' 
        : (nilaiMtk > 80) ? 'B' 
        : (nilaiMtk > 70) ? 'C' 
        : 'Tidak Lulus';
console.log(grade);