var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    });
};

async function exec() {
    await sleep(5000);
}

async function go() {
    console.log("start");
    c1 = exec()
    c2 = exec()
    await c1;
    await c2;
    console.log("end");
}

go();
