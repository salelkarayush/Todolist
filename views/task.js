const createtaskTemplate = (task) => /*html*/`
  <li data-id="${task.id}">
    <div 
      class="details" 
      hx-get="/tasks/edit/${task.id}"
      hx-target="closest li"
    >
      <h3>${task.title}</h3>
      <p>${task.date}</p>
    </div>
    <button
      hx-delete="/tasks/${task.id}" 
      hx-target="closest li" 
      hx-swap="outerHTML"
      >Done
    </button>
    
  </li>
`;

export default createtaskTemplate;