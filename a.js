let tasks = [];

function add() {
const taskInput = document.getElementById("task").value;
const priorityInput = document.getElementById("priority").value;

if (taskInput === "" || priorityInput === "") {
alert("Please enter both task and priority.");
return;
}

const task = {
name: taskInput,
priority: parseInt(priorityInput)
};

tasks.push(task);
document.getElementById("task").value = "";
document.getElementById("priority").value = "";
}

function displayTasks() {
const output = document.getElementById("output");
output.innerHTML = ""; 


tasks.sort((a, b) => a.priority - b.priority);

tasks.forEach(task => {
const newTask = document.createElement('li');
newTask.innerText = `${task.name} (Priority: ${task.priority})`;
output.appendChild(newTask);
});
}