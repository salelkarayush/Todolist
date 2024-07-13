// models/task.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  date: String
});

const Task = mongoose.model('Task', taskSchema);

export default Task;

