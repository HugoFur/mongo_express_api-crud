const router = require('express').Router();
const candidate = require('../models/Candidate');


//  data create
router.post('/', async (req, res) => {

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

        await candidate.create(candidate);
        res.status(201).json({message: 'Candidate was created!'});

    } catch (error) {
        res.status(500).json({error: error});
    }
});


//  data read
router.get('/', async (req, res) => {
    try {

        const candidate = await candidate.find();
        
    } catch (error) {
        res.status(500).json({error: error});
    }
})


router.get('/candidate/:id', async (req, res) => {
    const id = req.params.id
  
    try {
      const candidate = await candidate.findOne({ _id: id })
  
      if (!candidate) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
      }
  
      res.status(200).json(candidate)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  })
  


  router.patch('/candidate/:id', async (req, res) => {
    const id = req.params.id
  
    const { name, party, salary, approved } = req.body
  
    const candidate = {
      name,
      party,
      salary,
      approved,
    }
  
    try {
      const updatedcandidate = await candidate.updateOne({ _id: id }, candidate)
  
      if (updatedcandidate.matchedCount === 0) {
        res.status(422).json({ message: 'User not found' })
        return
      }
  
      res.status(200).json(candidate)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })
  
  router.delete('/candidate/:id', async (req, res) => {
    const id = req.params.id
  
    const candidate = await candidate.findOne({ _id: id })
  
    if (!candidate) {
      res.status(422).json({ message: 'User not found' })
      return
    }
  
    try {
      await candidate.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'User successfully removed!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

module.exports = router;