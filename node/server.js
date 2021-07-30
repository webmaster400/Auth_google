const express = require('express')
const { OAuth2Client } = require('google-auth-library')
const cors = require('cors')
const app = express()
const clint = new OAuth2Client("228159036348-f9614kbr0ue5uedh7ldt5eqspe48dpii.apps.googleusercontent.com")
app.use(express.json())
app.use(cors())
app.post('/googleLogin',(req,res)=>{
    const {tokenId} = req.body
    clint.verifyIdToken({idToken:tokenId,audience:'228159036348-f9614kbr0ue5uedh7ldt5eqspe48dpii.apps.googleusercontent.com'})
         .then(responce => {
            console.log(responce)
         })
         .catch(err=>{
            console.log(err)
         })
    res.status(200).json({
        msg:"LOgin Successfuly"
    })
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000...')
})