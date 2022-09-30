const express = require('express')
const app = express()
const port = 3000


app.use(express.json());
// we’ll using the built-in Express JSON parser middleware to parse JSON in the next steps. We’ll also utilize the express.urlencoded() middleware to parse the URL encoded body.
app.use(express.urlencoded({extended: false}));

app.use('/api/user', require('./routes/api/user'))
app.use('/api/movie', require('./routes/api/movie'))
app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/mysql', require('./routes/api/mysql'))
app.use('/api/mongodb', require('./routes/api/mongodb'))
app.use('/api/mongoose', require('./routes/api/mongoose'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})