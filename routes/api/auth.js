const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
let users = require('../../user')

router.post("/login", (req, res) => {
    let {username, password } = req.body
    const indexUser = users.findIndex(user=>user.username === username);
    if (indexUser>-1){
        const user = users[indexUser];
        if (password === user.password){
            const data = {id: user.name};
            const token = jwt.sign(data, 'jwtSecretKey');
            res.send({token: token, user: user});
        }
    }
    res.status(400).send("Unauthenticated");
});

const veriryToken = (req, res, next) =>{
    try{
        const token = req.header("Authorization").split(" ")[1];
        const verified = jwt.verify(token, 'jwtSecretKey');
        if(verified){
            next();
        }else{
            // Access Denied
            return res.status(401).send("Failed to authenticate token.")
        }
    }catch(e){
        console.log(" e ", e);
        return res.status(401).send("Failed to authenticate token.")
    }
}

router.get("/user-private", veriryToken, (req, res, next) => {
    res.send("Successfully Verified1");
});



module.exports = router;
