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
        const createdAt = req.body.createdAt
        const book = req.body.book
        const createdBy = req.body.createdBy
        //storing in database
        const updatedStore = new Stores({name,desc,createdAt,book,createdBy})
        await updatedStore.save()
        return res.status(201).json({ message: 'book created!', updatedStore})

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
        const value = req.query.value 
        const update = await Stores.updateOne({"book._id":id},{$set:{"book.$.name": value}})
            if(update){

             res.status(202).json({ message: 'book updated!'})
            }else{
                res.status(500).json({ message: 'book not updated!'})
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
        return res.status(202).json({ message: 'inventory deleted!'})

    } catch (err) {
       if (!err.statusCode) {
           err.statusCode = 500;
         }
       next(err);
    }
}



