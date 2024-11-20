const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 Sucess");
  }, 3000);
});
const P2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 fail");
  }, 1000);
});
const P3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Sucess");
  }, 2000);
});

Promise.any([P1, P2, P3])
  .then((res) => {
    console.log(res);
    console.log(res[0]);
  })
  .catch((err) => {
    console.log(err);
  });
