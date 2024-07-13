const createtaskTemplate = (task) => /*html*/`
  <li data-id="${task.id}">
    <div 
      class="details" 
      hx-get="/tasks/edit/${task.id}"
      hx-target="closest li"
    >
      <h3>${task.title}</h3>
      <p>${task.author}</p>
    </div>
    <button
      hx-delete="/tasks/${task.id}" 
      hx-target="closest li" 
      hx-swap="outerHTML"
      >Delete
    </button>
    
  </li>
`;

export default createtaskTemplate;