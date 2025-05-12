// GET REQUEST
function getTodos() {
  console.log("GET");
  // aquí tu código
  axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then((res) => console.log(res)) //con este solo se va a mostrar el resultado por consola. se comenta para poder llamar a la función de mostrar en pantalla con showOutput(res)
    .then((res) => showOutput(res))
    .catch((err) => console.log(err))
}


// POST REQUEST
function addTodo() {
  console.log("POST");
  // aquí tu código
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'New Post',
    body: 'Body title',
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log("PUT/PATCH");
  // aquí tu código
  axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Post Updated',
    body: 'Body updated',
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

// DELETE REQUEST
function removeTodo() {
  console.log("DELETE");
  // aquí tu código
  axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res))
    .catch((err) => console.log(err)) 
}

// Show output in browser
//Nota: en este ejemplo usamos JSON.stringify para hacer rápido el ejercicio (normalmente usaremos un bucle para pintar datos)
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
