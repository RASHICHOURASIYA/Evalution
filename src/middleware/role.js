const role = (role) =>{
    return function (req, res, next){
        console.log(req.user);


        if(role.includes(req, res, role)){
            next();
        }else{
            return res.status(401).json({message:"your are not authorized to access this route"})
        }
    };
};

module.exports = role;