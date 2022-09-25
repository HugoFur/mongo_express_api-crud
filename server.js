//  initial settings
const express = require('express');
const mongoose = require('mongoose');
const Candidate = require('./models/Candidate');
const app = express();
const port = 3000;


//  to read json
app.use(express.urlencoded(
    {
        extended: true
    }
));

app.use(express.json());


//  initial route
app.get('/', (req, res) => {
    res.json({ message: 'Hi' });
});


//  data create
app.post('/candidate', async (req, res) => {

    const {name, party, salary, approved} = req.body; // destructuring assignment

    if(!name){
        res.status(422).json({error: 'Name is required!'}) //  validation
    }

    const candidate = {
        name,
        party,
        salary,
        approved
    };

    try {

        await Candidate.create(Candidate);
        res.status(201).json({message: 'Candidate was created!'});

    } catch (error) {
        res.status(500).json({error: error});
    }
});



// db connection
mongoose.connect(`mongodb+srv://${process.env._USER}:${process.env._PASS}@apicluster.cplj4wj.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('connected to mongoDB Atlas')
}).catch(err => console.log(err));


//  endpoint
app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
});