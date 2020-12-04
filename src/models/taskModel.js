const { Schema, model, Mongoose } = require('mongoose');

const TaskSchema = new Schema({
 user:{
   type: Schema.Types.ObjectId,
   ref: 'User'
 },


  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model('Task', TaskSchema);