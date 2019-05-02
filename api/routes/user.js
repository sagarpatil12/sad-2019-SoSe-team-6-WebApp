//const usermodel = require ('../model/mongodb.model')
const express = require('express')
const router =express.Router()

// router.post('/user',(req,res)=>{
// if(!req.body){
//     return res.status(400).send('requested body not found')
// }

// let model = new usermodel(req.body)
// model.save()
// .then(doc => {
//     if(!doc || doc.length === 0){
//         return res.status(500).send(doc)        
//     }
//     res.status(201).send(doc)
// })
// .catch(err=>{
//     res.status(500).json(err)
// })
// })
// module.exports = router;