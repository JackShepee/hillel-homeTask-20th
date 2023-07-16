function delayPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Готово");
    }, 2000);
  });
}

delayPromise().then((message) => {
  console.log(message);
});
