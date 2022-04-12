const printSegitiga = (num) => {
    if (typeof num != "number") {
        console.log("Data harus number");
    } else {
        for (let i = num; i >= 1; i--) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += " " + j;
        }
        console.log(result);
        }
    }
    }
printSegitiga(5);