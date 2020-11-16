var express = require('express');

const userRouter = require('./routers/user')
var app = express();
const port = 3333 || process.env.PORT

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })

module.exports = app