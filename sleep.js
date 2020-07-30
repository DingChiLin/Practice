function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    },time); 
  })
}

async function main() {
  console.log("start");
  await sleep(3000);
  console.log("finish");
}

main();
