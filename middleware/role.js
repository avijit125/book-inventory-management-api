module.exports = (req,res,next)=>{
     if(req.body.role !== 'seller'){
         return res.status(401).json({ message: 'not allowed'})
     }

     next();
}