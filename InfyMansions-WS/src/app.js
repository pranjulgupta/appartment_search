const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter')
const cors = require("cors")
const app = express();
const errorLogger= require('./utilities/ErrorLogger')
const requestLogger= require('./utilities/RequestLogger')

const create = require('./model/dbsetup')
// >>>>>>> 174f8d4ebb6d801dd08d9349c1bf4ffce6d8f4d0

app.use(cors())
app.use(bodyParser.json());
// to setup the Database
app.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})
app.use(requestLogger)
app.use('/user', userRouter)
app.use(errorLogger)
console.log("Server listening in port 3000");
app.listen(3000);


module.exports = app;