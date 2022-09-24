const text = document.getElementById("add-input");
// const searchText = document.getElementById("search-input");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

let todoArray = [];


addTaskButton.addEventListener("click", (e) => {
  if (!text.value) {
    if(todoArray.includes(text.value)){
      return displayTodo(filteredArray);
    }else{
      todoArray.push(text.value);
      text.value = "";
      localStorage.setItem("todo", JSON.stringify(todoArray));
      displayTodo(todoArray);
    }
  }else {
      alert('Please write something todo');
    }
  e.preventDefault();
});

function displayTodo(array) {
  let htmlCode = "";
  array.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
    <p class='w-full text-grey-darkest'>${list}</p>
    <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
    <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
 </div>`;
  });
  listBox.innerHTML = htmlCode;
 }  

text.addEventListener("keyup", ({target}) => {
  filteredArray = todoArray.filter((item) => {
    return item.includes(target.value);
  });
  displayTodo(filteredArray);
})

 function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  alert('Are You Sure!');
  displayTodo(todoArray);
 }

 function edit(ind) {
  saveInd.value = ind;
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  text.value = todoArray[ind];
  addTaskButton.style.display = "none";
  saveTaskButton.style.display = "block";
 }


 saveTaskButton.addEventListener("click", () => {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  let id = saveInd.value;
  todoArray[id] = text.value;
  addTaskButton.style.display = "block";
  saveTaskButton.style.display = "none";
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo(todoArray);
 });
