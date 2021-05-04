class RateLimiter {
    constructor({ limit }) {
        if (!Number.isSafeInteger(limit) || limit <= 0) {
        throw new Error(`invalid limit, expect 0 < limit < 2^53-1, got ${limit}`);
        }
        this.limit = limit;
        this.queue = [];
        this.doingCount = 0;
        return this;
    }

    do(f) {
        console.log("DO");
        const p = new Promise((resolve, reject) => {
            this.queue.push({ f, resolve, reject });
        });
        this._pick();
        return p;
    }

    // Internal function for checking and picking task from the queue
    _pick() {
        console.log("PICK");
        console.log("queue len:",  this.queue.length);
        if (this.doingCount >= this.limit || this.queue.length === 0) {
            console.log("NO?")
            return;
        }
        console.log("start pick");
        this.doingCount += 1;
        const { f, resolve, reject } = this.queue.shift();
        (async () => {
        try {
            console.log("DO JOB F");
            const result = await f();
            console.log("RESULT:", result);
            resolve(result);
        } catch (err) {
            reject(err);
        } finally {
            this.doingCount -= 1;
            this._pick();
        }
        })();
    }
}

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve}, time);
    })
}
  
async function testRateLimiter() {
    const rateLimiter = new RateLimiter({ limit: 2 });
    for (let i = 0; i < 3; i += 1) {
        console.log("======");
        (async () => {
        try {
            await rateLimiter.do(async () => {
                await sleep(1000);
                // if (i > 7) throw new Error(`Throwing ${i}`);
                console.log(i);
                return "finish job";
            });
            console.log(`${i} done`);
        } catch (err) {
            console.log(`Catch ${err}`);
        }
        })();
    }
}

async function main() {
    await testRateLimiter();
}

main();