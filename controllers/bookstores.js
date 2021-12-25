const Stores = require('../models/store')


// get all Store
exports.getAllStores = async(req,res,next)=>{
     try {
         const data = await  Stores.find()
         return res.status(200).json(data)

     } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
        next(err);
     }
}

// create Store
exports.createStore = async(req,res,next)=>{
    try {
        //destructuring the body
        const name = req.body.name
        const desc = req.body.desc
        const timing = req.body.timimg
        //storing in database
        const updatedClass = new Stores({name,desc,timing})
        await updatedClass.save()
        return res.status(201).json({ message: 'Class created!', updatedClass})

    } catch (err) {
       if (!err.statusCode) {
           err.statusCode = 500;
         }
       next(err);
    }
}

// update Store
exports.updateStore = async(req,res,next)=>{
    try {
        const id = req.params.id
        if(req.body.name){
            const name = req.body.name
            await Stores.findByIdAndUpdate(id,{name})
            return res.status(202).json({ message: 'Class updated!'})
        }
        if(req.body.desc){
            const desc = req.body.desc
            await Stores.findByIdAndUpdate(id,{desc})
            return res.status(202).json({ message: 'Class updated!'})
        }
        if(req.body.timing){
            const timing = req.body.timing
            await Stores.findByIdAndUpdate(id,{timing})
            return res.status(202).json({ message: 'Class updated!'})
        }

    } catch (err) {
       if (!err.statusCode) {
           err.statusCode = 500;
         }
       next(err);
    }
}

// delete Store
exports.deleteStore = async(req,res,next)=>{
    try {
        await Stores.findByIdAndDelete(req.query['id'])
        return res.status(202).json({ message: 'Class deleted!'})

    } catch (err) {
       if (!err.statusCode) {
           err.statusCode = 500;
         }
       next(err);
    }
}



