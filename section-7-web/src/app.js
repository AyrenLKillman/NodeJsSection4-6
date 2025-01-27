const path = require('path')
const express = require('express')

//!rewatch vid 7-7
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')


app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'aboht mah'
    })
})

app.get('/help', (req, res) => {
    res.render('about', {
        title: 'help i guess'
    })
})



app.get('/weather', (req, res) => {
    res.send('asdf part four')
} )

app.listen(3000, () => {
    console.log("server is up")
})