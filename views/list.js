import createtaskTemplate from './task.js';

const createListTemplate = (tasks) => /*html*/`
  <ul>
    ${tasks.map((task) => createtaskTemplate(task)).join('')}
  </ul>
  
`;

export default createListTemplate;