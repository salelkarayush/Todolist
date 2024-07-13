import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createtaskTemplate from './views/task.js';
import createEditFormTemplate from './views/edit.js';
import taskS_DATA from './data/data.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/tasks', (req, res) => {
  res.send(createListTemplate(taskS_DATA));
});

app.post('/tasks', (req, res) => {
  const {title, author} = req.body;
  const id = Math.random().toString();

  taskS_DATA.push({id, title, author});

  res.redirect('/tasks/' + id)
});

app.get('/tasks/:id', (req, res) => {
  const {id} = req.params;
  const task = taskS_DATA.find(b => b.id === id);

  res.send(createtaskTemplate(task));
});

app.delete('/tasks/:id', (req, res) => {
  const idx = taskS_DATA.findIndex(b => b.id === req.params.id);
  taskS_DATA.splice(idx, 1);

  res.send();
});

app.put('/tasks/:id', (req, res) => {
  const {title, author} = req.body;
  const {id} = req.params;

  const newtask = {title, author, id};

  const idx = taskS_DATA.findIndex(b => b.id === id);
  taskS_DATA[idx] = newtask

  res.send(createtaskTemplate(newtask));
})

app.get('/tasks/edit/:id', (req, res) => {
  const task = taskS_DATA.find(b => b.id === req.params.id);

  res.send(createEditFormTemplate(task));
});

app.post('/tasks/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  console.log(text);
  
  res.send(createListTemplate(taskS_DATA.filter(b => b.title.toLowerCase().includes(text))));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});