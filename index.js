let i = 1; // Declare globally to maintain task numbering

function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let taskDate = document.getElementById("taskDate").value;
    let priorityDropdown = document.getElementById("priority").value; 

      

    if (taskText === "") return alert("Task cannot be empty!");
    if (taskDate === "") return alert("Please Enter Date!"); 
    if (priorityDropdown === "") return alert("Please Enter Priority!");

    let today = new Date().toISOString().split("T")[0];

    let parts =taskDate.split("-"); // Splits "YYYY-MM-DD" into ["YYYY", "MM", "DD"]
    let ans= `${parts[2]}/${parts[1]}/${parts[0]}`; 

    let taskItem = document.createElement("li");
    taskItem.className = "task-item-div";

    taskItem.innerHTML = `
        <div>${i++}. ${taskText}</div>
        <div>Priority: ${priorityDropdown}</div>
        <div>${ans}</div>
        <div class="task-actions">
            <button class="complete-btn">
                <img src="https://tse4.mm.bing.net/th?id=OIP.tT6a3_OHZk04dvNTxWHJvQHaHa&pid=Api&P=0&h=220" alt="Complete">
            </button>
            <button class="delete-btn">
                <img src="https://tse2.mm.bing.net/th?id=OIP.UuH6VT4i0wFnfvofWnD-ogHaHa&pid=Api&P=0&h=220" alt="Delete">
            </button>
        </div>
    `;

    // Add event listeners correctly
    taskItem.querySelector(".complete-btn").addEventListener("click", () => completeTask(taskItem));
    taskItem.querySelector(".delete-btn").addEventListener("click", () => deleteTask(taskItem));

    // Append to the right section
    if (taskDate === today) {
        document.getElementById("todayTasks").appendChild(taskItem);
    } else {
        document.getElementById("futureTasks").appendChild(taskItem);
    }

    // Clear input fields after adding task
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("priority").value = "";
}

function completeTask(button) {
    let taskItem = button.closest("li"); // Get correct task item
let taskText = taskItem.children[0].innerText;
let priority = taskItem.children[1].innerText;
let date = taskItem.children[2].innerText;



    taskItem.className = "task-item-div1";
    taskItem.innerHTML = `
        <div>${taskText}</div>
        <div>${priority}</div>
        <div>${date}</div>
        <div class="task-actions">
            <button class="delete-btn">
                <img src="https://tse2.mm.bing.net/th?id=OIP.UuH6VT4i0wFnfvofWnD-ogHaHa&pid=Api&P=0&h=220" alt="Delete">
            </button>
        </div>
    `;

    // taskItem.className = "completedlist";

    // taskItem.style.marginRight = "10px";
    // taskItem.style.marginLeft = "20px";
    // taskItem.style.width = "1200px";
    // taskItem.style.height = "26px";
    // taskItem.style.marginTop = "10px";
    // taskItem.style.backgroundColor = "#f4f4f4";
    // taskItem.style.color = "black";
    

    // Reassign delete button event listener
    taskItem.querySelector(".delete-btn").addEventListener("click", () => deleteTask(taskItem));

    document.getElementById("completedTasks").appendChild(taskItem);
}

function deleteTask(button) {
    button.closest("li").remove(); // Ensure proper removal
}
