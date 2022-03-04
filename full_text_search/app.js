const mysql = require('mysql2/promise');

mysqlEnv = {
    host: '127.0.0.1',
    user: 'arthurlin',
    password: 'Az=123456',
    database: 'test'
}


const pool = mysql.createPool(mysqlEnv);

const rnd = (() => {
    const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));

    const sets = {
        num: gen(48,57),
        alphaLower: gen(97,122),
        alphaUpper: gen(65,90),
        special: [' ']
        // special: [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`]
    };

    function* iter(len, set) {
        if (set.length < 1) set = Object.values(sets).flat(); 
        for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0]
    }

    return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);
})();

var randomSentence = require('random-sentence');
// const { text } = require('stream/consumers');

async function main() {
    // let [result] = await pool.query('SELECT * FROM product');
    word_counter = {}
    for (let k = 0; k < 10; k++) {
        values = []
        console.log("K:", k);
        let N = 10000
        for (let i = 0; i < N; i++) {
            // console.log(i)
            // let text = (Math.random() + 1).toString(100).substring(2);
            text = ""
            for (let j = 0; j < 5; j++) {
                text += randomSentence({words: 20})
                text += ' '
            }
            // text = randomSentence()
            // console.log(text);
            values.push([text, text, text])
            for (word of text.split(' ')) {
                if (!word_counter[word]) {
                    word_counter[word] = 1;
                } else {
                    word_counter[word] += 1
                }
            }
        }
        // console.log(values)
        // console.log(word_counter)
        console.log("start insert")
        await pool.query('INSERT INTO product (description1, description2, description3) VALUES ?', [values]);
    // console.log(result);
    }
    top_words = []
    for (key in word_counter) {
        // console.log([word_counter[key], key])
        top_words.push([word_counter[key], key])
    }
    top_words = top_words.sort().reverse().splice(0, 20)
    console.log(top_words)
}
main()
// pool.query('INSERT INTO campaign (product_id, picture, story) VALUES ?', [campaigns.map(x => Object.values(x))]);
