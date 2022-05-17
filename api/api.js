const express = require('express');
const cors = require('cors');
const app = express();
const port = 8888;
const v1 = require('./controllers/v1');

app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000']
}));

app.use('/v1',v1);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});