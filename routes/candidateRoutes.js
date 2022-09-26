const router = require('express').Router();
const candidate = require('../models/Candidate');

router.post('/', async (req, res) => {

    const {name, party, salary, approved} = req.body.json; // destructuring assignment

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

        await candidate.create(candidate);
        res.status(201).json({message: 'Candidate was created!'});

    } catch (error) {
        res.status(500).json({error: error});
    }
});

module.exports = router;