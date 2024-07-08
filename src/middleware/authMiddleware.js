var jwt = require('jsonwebtoken');


const auth = async (req, res, next) =>{
    const header = req.headers.authorization;

    if(!header){
        return res.status(400).json({
            message:"token is not present or token is not provided",
        });
    }


    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "masai", function(err, decoded){
        if(err){
            return res.status(400).json({message: "this is not valid token"});
        }else{
            req.customer = decoded;
            next();
        }
    });

};

module.exports = auth;