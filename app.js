const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`);
});

app.get(port, (req, res, next) => {
    res.send('working')
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status('400').send('not working')
})