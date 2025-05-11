// GET REQUEST
async function getTodos() {
  //aquí tu código

  try {
    const res = await axios.get("http://localhost:4000");
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// POST REQUEST
async function addTodo() {
  //aquí tu código

  try {
    const todo = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "que funcione esto",
        completed: false,
      }
    );
    console.log(todo);
    showOutput(todo);
  } catch (error) {
    console.error(error);
  }
}

// PUT/PATCH REQUEST
async function updateTodo() {
  //aquí tu código

  try {
    const res = await axios.put(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        title: "delectus aut autem",
        completed: true,
      }
    );
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// DELETE REQUEST
async function removeTodo() {
  //aquí tu código

  try {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    //aquí tu código

    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
      <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          Data
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
      </div>
    `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
