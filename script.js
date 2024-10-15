//here we are using getElementById method to select our input box and list container element using Dom
const inputBox = document.getElementById("input-box");                  
const listContainer = document.getElementById("list-container");


// here we made addTask Function if a user forgets to type.Alert message will come and return it. and targeting by inBox
function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    console.log("no task added");

    return;
  }

//here we create a new list by using document.createElement.A checkbox-type <input> that holds task content using ${task}na dusing template litteral.
  const li = document.createElement("li"); 
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

  listContainer.appendChild(li);  //here we use appenChild to add our list and this will add the created list in listContainer

  // the output reamins in inputBox.To make empty String.We made this inputBox.value.by this addtask function get the line of code
  inputBox.value = " ";

  // here we are activating our buttons by using queryselector.By this we can add each task and it allow us to manipulate.here is input button for checkbox and span for our edit and delete buttons.hereTaskspan variable allow us to edit a specific task when the edit button is clicked.
  const checkbox = li.querySelector("input");
  const editBtn = li.querySelector(".edit-btn");
  const taskSpan = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");

  // here .addEventlistener method is there to attach a checkbox element.when we click it will react.We use classlist toggle to add li and when checkBox is checked our checkBox gets trueand if it is unchecked the value remain false.
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

//here we attach  eventListener method to edit button that executes enclosed function when it clicks.Here we using prompt to display dialog box.here if condition checks user has provided any input.when user provides a new value,the textContent of the taskSpan will update display value.If somebody wants to change check off task for that we are using li.claslist.remove. And will update task.
  editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      checkbox.checked = false;
      
    }
  });
//when you delete a task confirm message will come and by remove method  we clear the things
  deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      
    }
  });
  
}

