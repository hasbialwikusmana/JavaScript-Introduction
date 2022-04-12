const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

if( typeof mtk == "string" || 
    typeof bahasaIndonesia == "string" || 
    typeof bahasaInggris == "string" || 
    typeof ipa == "string"){
    console.log("Semua data harus berisi nilai");
}else if(typeof mtk != "number" || 
    typeof bahasaIndonesia != "number" || 
    typeof bahasaInggris != "number" || 
    typeof ipa != "number"){
    console.log("Data harus diisi");
}else{
    const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    console.log(`Rata-rata nya adalah ${rataRata}`);
    
    if(rataRata >= 90 && rataRata <= 100){
        console.log("Grade = A");
    }else if(rataRata >= 80 && rataRata <= 89){
        console.log("Grade = B");
    }else if(rataRata >= 70 && rataRata <= 79){
        console.log("Grade = C");
    }else if(rataRata >= 60 && rataRata <= 69){
        console.log("Grade = D");
    }else if(rataRata >= 0 && rataRata <= 59){
        console.log("Grade = E");
    }
}


