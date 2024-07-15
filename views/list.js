import createtaskTemplate from './task.js';

const createListTemplate = (tasks) => /*html*/`
  <h2>Pending Tasks</h2>
  <ul>
    ${tasks.map((task) => createtaskTemplate(task)).join('')}
  </ul>
  
`;

export default createListTemplate;