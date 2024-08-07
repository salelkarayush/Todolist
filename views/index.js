const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@2.0.1" integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>Todo-List</h1>
      </header>

      <main>
        <!-- <div class="search" style="text-align: center;">
          <input 
            type="search"
            name="search"
            placeholder="Search Tasks by title..."
            hx-post="/tasks/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".task-list"
          />
        </div>  -->

        <div class="tasks-list">
          <button hx-get="/tasks" hx-target=".tasks-list">Show Tasks</button>
        </div>

        <div class="add-task-form">
          <h2>What do you want to do?</h2>
          <form
            hx-post="/tasks" 
            hx-target=".tasks-list ul" 
            hx-swap="beforeend" 
            hx-on::after-request="document.querySelector('form').reset()"
          >
            <input 
              id="title" 
              name="title"
              placeholder="Add a task description" 
              type="text"
              required 
            />
            <input 
              id="due-date" 
              name="date"
              type="date"
              required
            />
            <button>Add</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;
