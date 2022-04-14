let mtk = 101;
let bahasaIndonesia = 90;
let bahasaInggris = 89;
let ipa = 69;

if( typeof mtk === "string" || 
    typeof bahasaIndonesia === "string" || 
    typeof bahasaInggris === "string" || 
    typeof ipa === "string"){
    console.log("Semua data harus berisi nilai");
}else if(typeof mtk !== "number" || 
    typeof bahasaIndonesia !== "number" || 
    typeof bahasaInggris !== "number" || 
    typeof ipa !== "number"){
    console.log("Data harus diisi");
}else if( mtk > 100 || bahasaIndonesia > 100 || bahasaInggris > 100 || ipa > 100){
    console.log("Nilai tidak boleh lebih dari 100");
}else{
    const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    grade = "";
    
    if(rataRata >= 90 && rataRata <= 100){
        grade ="A";
        console.log(`Rata-rata = ${rataRata} 
Grade = ${grade}`);
    }else if(rataRata >= 80 && rataRata <= 89){
        grade ="B";
        console.log(`Rata-rata = ${rataRata} 
Grade = ${grade}`);
    }else if(rataRata >= 70 && rataRata <= 79){
        grade ="C";
        console.log(`Rata-rata = ${rataRata}
Grade = ${grade}`);
    }else if(rataRata >= 60 && rataRata <= 69){
        grade ="D";
        console.log(`Rata-rata = ${rataRata}
Grade = ${grade}`);
    }else if(rataRata >= 0 && rataRata <= 59){
        grade ="E";
        console.log(`Rata-rata = ${rataRata}
Grade = ${grade}`);
    }else{
        console.log("Data tidak valid");
    }
}