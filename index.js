const express = require('express')
const app = express()
const { env } = require('process');
const port = process.env.PORT || 4455;

app.set('view engine', 'ejs')
app.use(express.static("public"))


const arr = require('./data')
// console.log(arr)
app.get('/', (req, res) => {
    try {
        res.render('login')
    }
    catch (e) {
        console.log(e)
    }
})

app.get('/home', (req, res) => {
    try {
        res.render('index')
    }
    catch (e) {
        console.log(e)
    }
})

app.get('/open/:random', (req, res) => {
    console.log(req.params.random)
    arr.forEach(function (card) {
        const temp = "'" + card.id + "'";
        if (req.params.random === temp) {
            // console.log("kdfjkd")
            res.render('random', { card: card })
        }
    })
})

app.listen(port, () => {
    console.log(`Server started on 4455`);
});