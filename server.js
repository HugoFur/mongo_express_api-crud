//  initial settings
const express = require('express');
const mongoose = require('mongoose');
const candidate = require('./models/Candidate');
const app = express();
const port = 3000;


//  to read json
app.use(express.urlencoded(
    {
        extended: true
    }
));

app.use(express.json());


//  routes
const candidateRouter = require('./routes/candidateRoutes');
app.use('/Candidate', candidateRouter);


//  initial route
app.get('/', (req, res) => {
    res.json({ message: 'Hi' });
});


// db connection
mongoose.connect(`mongodb+srv://${process.env._USER}:${process.env._PASS}@apicluster.cplj4wj.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('connected to mongoDB Atlas')
}).catch(err => console.log(err));


//  endpoint
app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
});
