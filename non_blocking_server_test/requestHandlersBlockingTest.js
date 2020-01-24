const exec = require("child_process").exec;

// non-blocking
function probablyExpensiveFunction() {
    console.log("a non-blocking long running function");
    return new Promise((resolve, reject) => {
        exec("find /",
            { timeout: 10000, maxBuffer: 20000*1024 },
            (error, stdout, stderr) => {
                resolve(stdout);
            });
    })
}

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

// blocking
function sleepSteps() {
    return new Promise((resolve, reject) => {
        console.log('start promise');
        sleep(3000);
        resolve("");
    })
    .then(() => {
        console.log('step1');
        sleep(3000);
        return;
    })
    .then(() => {
        console.log('step2');
        sleep(3000);
        return;
    })
    .then(() => {
        console.log('step3');
        sleep(3000);
        return "finish"
    })
    .catch(console.log);
}

// blocking
function sleepOneTimes() {
    return new Promise((resolve, reject) => {
        console.log('sleep once');
        sleep(3000);
        resolve("");
    })
}

async function start(response) {
    console.log("Request handler 'start' was called.");

    const result = await probablyExpensiveFunction();
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(result);
    response.end();
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}
  
exports.start = start;
exports.upload = upload;