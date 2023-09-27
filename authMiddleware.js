const jwt = require('jsonwebtoken')

const requireAuth = (req,res)=>{
    // const token = req.cookies.jwt;
    // if(token){
    //     jwt.verify(token,'soham secret',(err, decodedToken)=>{
    //         if(err){
    //             console.log("error while verifying")
    //         }else{
    //             console.log(decodedToken);
    //             res.json(decodedToken);
    //         }
    //     })

    // }else{
    //     console.log("not found")
    // }
    res.send("hi")
}

module.exports = requireAuth;