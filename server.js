// console.log('hello amigo')

const express = require('express')
const app = express()
const port = 1211

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var gsjson = require('google-spreadsheet-to-json');

app.get('/json', (req, res) => {
    gsjson({
        spreadsheetId: '1-vt_y5hG8fINKqlvQJGBD4Ea1qKeC5Ufc-WYMGE9_Zg',
        // other options...
    })
    .then(function(result) {
        console.log(result.length);
        console.log(result);
		res.send(result);

    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });
})