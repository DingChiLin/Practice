function getPromise() {
  let timer = null;
  let timerPromise = new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      console.log('timer 1');
      resolve('timer 2');
    }, 5000);
  });
  return { timer, timerPromise };
}

(async () => {
  let obj = getPromise();
  let timer = obj.timer;
  setTimeout(() => {
    clearTimeout(timer);
  }, 2000);
  obj.timerPromise
    .then((r) => console.log)
    .catch((e) => {
      console.log('err', e);
    });
})();
