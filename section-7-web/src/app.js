const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const ViewsPath = path.join(__dirname, '../templates/views')
const PartialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', ViewsPath)
hbs.registerPartials(PartialsPath)

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