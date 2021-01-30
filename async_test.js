var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    });
};

async function exec() {
    await sleep(2000);
}

async function go() {
    console.time();
    c1 = exec()
    c2 = exec()
    console.log(c1, c2)
    await c1;
    await c2;
    console.timeEnd();
}

go();
