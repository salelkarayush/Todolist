const createEditFormTemplate = (task) => /*html*/`
  <form hx-put="/tasks/${task.id}" hx-target="closest li" hx-swap="outerHTML">
    <input 
      name="title"
      placeholder="title" 
      type="text" 
      value="${task.title}" 
    />
    <input 
      name="due-date"
      placeholder="due-date" 
      type="date" 
      value="${task.date}" 
    />
    <input 
      id="due-time" 
      name="due-time"
      type="time"
    />
    <button>Confirm</button>
  </form>
`;

export default createEditFormTemplate;