const express = require('express');
const cors = require('cors');


const app = express();

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})

app.use(express.json());
const port = process.env.PORT || 3333
app.listen(port || 3333, ()=>console.log('listening on PORT '+port))