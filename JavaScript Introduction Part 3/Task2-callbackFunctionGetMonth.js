const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "januari",
      "februari",
      "maret",
      "april",
      "mei",
      "juni",
      "juli",
      "agustus",
      "september",
      "oktober",
      "november",
      "desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};
getMonth((error, monthAll) => {
  if (error !== null) {
    console.log(error);
  } else {
    const result = monthAll.map((value) => value);
    console.log(result);
  }
});
