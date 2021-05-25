const express = require('express');
const app = express()
const port = 8000
const dbSetup = require('./database/setup.js')
app.use(express.json())
//SetUp db
dbSetup()

//SetUp Schema
const Book = require('./models/book')
const bookRoutes = require('./routes/bookRoutes.js')


app.use(bookRoutes)


Book.create({
    title: "New Book Coming",
    cost: 10,
    author: " James Brown",
    category: "music",
    purchaseCount: 50,
    tags: ["tag1", "another tag"]
}, (err, book) => {
    if(err) {
        console.log(err)
    } else {
        console.log(book)
    }
})

app.use(bookRoutes)
app.listen(port, ()=> console.log('App is listen on server'))