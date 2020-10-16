import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});
