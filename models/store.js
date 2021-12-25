const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StoresSchema = new Schema({
  name:{
      type: String,
  },
  desc:{
    type: String,
},
createdAt:{
    type: Date,
    default: Date.now()
},
book:[{
    name:{type:String},
    desc:{type:String},
    genre:{type:String},
    rating:{type: Number}

}],
createdBy:[
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
]
},{ timestamps: true });

module.exports = mongoose.model('Store', StoresSchema);
