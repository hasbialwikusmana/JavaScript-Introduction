const getDataPost = (method, url) => {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText);
        resolve(result);
      } else {
        reject(new Error("Ada Error Bro"));
      }
    };
  });
};
const handleDataPost = async () => {
  try {
    const result = await getDataPost(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    result.map((item) => {
      console.log(item.title);
    });
  } catch (error) {
    console.log(error);
  }
};

handleDataPost();
