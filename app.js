const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require("path");


app.use(express.json());
// we’ll using the built-in Express JSON parser middleware to parse JSON in the next steps. We’ll also utilize the express.urlencoded() middleware to parse the URL encoded body.
app.use(express.urlencoded({extended: false}));

app.use('/api/user', require('./routes/api/user'))
app.use('/api/movie', require('./routes/api/movie'))
app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/mysql', require('./routes/api/mysql'))
// app.use('/api/mongodb', require('./routes/api/mongodb'))
// app.use('/api/mongoose', require('./routes/api/mongoose'))


app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/templates"));

app.get('/index', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);