document.getElementById('formTask').addEventListener('submit', saveTask)

function saveTask(e) {
 let budget = document.getElementById('budget').value
 let money = document.getElementById('money').value
 let date = document.getElementById('date').value
 let description = document.getElementById('description').value
 console.log(money)

 let task = {
  budget,
  money,
  date,
  description,
 }

 if (localStorage.getItem('tasks') === null) {
  let tasks = []
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 } else {
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 }

 getTasks()
 document.getElementById('formTask').reset()
 e.preventDefault()
}

function deleteTask(budget) {
 console.log(budget)
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].budget == budget) {
   tasks.splice(i, 1)
  }
 }

 localStorage.setItem('tasks', JSON.stringify(tasks))
 getTasks()
}

function getTasks() {
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 let tasksView = document.getElementById('tasks')
 tasksView.innerHTML = ''
 for (let i = 0; i < tasks.length; i++) {
  let budget = tasks[i].budget
  let money = tasks[i].money
  let date = tasks[i].date
  let description = tasks[i].description

  tasksView.innerHTML += `<div class="card mb-3">
        <div class="alert alert-success">
          <p>Tipo de movimiento: ${budget} Cantidad de dinero: ${money} Fecha: ${date} Descripción: ${description}
          <a href="#" onclick="deleteTask('${budget}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`
 }
}

getTasks()
