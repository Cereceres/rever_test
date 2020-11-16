const User = require('../collections/User')



module.exports = (req, res)=>(async()=>{
        try {
                const user = req.body
        console.log('user ', user)
        const userCreated = await User.create(user)
        console.log('userCreated ', userCreated.insertedId);
        res.send(userCreated.insertedId)
                
        } catch (error) {
                console.log('error ======= ', error);
                res.status(500).send({ error})
        }
        
})()
.catch(error => res.status(500).send({ error}))