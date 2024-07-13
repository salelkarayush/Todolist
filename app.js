import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createtaskTemplate from './views/task.js';
import createEditFormTemplate from './views/edit.js';
import mongoose from 'mongoose';
import Task from '../Todolist/data/task.schema.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));
app.use(express.json()); 


mongoose.connect('mongodb+srv://certifiedcoders:wLDQ5WjysaWfUIz0@eventmanager.lxtd08i.mongodb.net/todolist', {
 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(createListTemplate(tasks));
});


app.post('/tasks', async (req, res) => {
  const { title, date } = req.body;
  console.log(title,date)
  const task = new Task({ title, date });

  await task.save();
  console.log("Task added to database"); 
  res.redirect('/tasks/' + task._id); // Use task._id to redirect to the newly created task
});

app.get('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.send(createtaskTemplate(task));
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.send();
});

app.put('/tasks/:id', async (req, res) => {
  const { title, date } = req.body;
  const { id } = req.params;

  const task = await Task.findByIdAndUpdate(id, { title, date }, { new: true });
  res.send(createtaskTemplate(task));
});

app.get('/tasks/edit/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.send(createEditFormTemplate(task));
});

app.post('/tasks/search', async (req, res) => {
  const text = req.body.search.toLowerCase();
  const tasks = await Task.find({ title: new RegExp(text, 'i') });
  res.send(createListTemplate(tasks));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});