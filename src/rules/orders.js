const ordersRules = (req,res,next) => {
    if(!req.body.products){
        res.status(400).send({message: 'Content not found'})
        return;
    }

    next();
}

module.exports = ordersRules