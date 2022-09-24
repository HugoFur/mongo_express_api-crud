//  initial settings
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


//  to read json
app.use(express.urlencoded(
    {
        extended: true
    }
));


// db connection
mongoose.connect(`mongodb+srv://${process.env._USER}:${process.env._PASS}@apicluster.cplj4wj.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('connected to mongoDB Atlas')
}).catch(err => console.log(err));


//  endpoint
app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
});