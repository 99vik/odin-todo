import formatDistance from "date-fns/formatDistance";

export default function generateTaskDiv(task) {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task");
    let taskInfoDiv = document.createElement("div");
    taskInfoDiv.setAttribute("class", "task-info");
    let taskDetailsDiv = document.createElement("div");
    taskDetailsDiv.setAttribute("class", "task-details");

    let inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type", "checkbox");
    if (task.completed) {
        taskInfoDiv.classList.add("completed");
        inputCheckbox.checked = true; 
    } 
    inputCheckbox.addEventListener("change", (e) => {
        taskCompleteToggle(e.target, task);
    });
    taskInfoDiv.appendChild(inputCheckbox);

    let p1 = document.createElement("p");
    p1.textContent = task.title;
    taskInfoDiv.appendChild(p1);

    if (task.dueDate) {
        let p2 = document.createElement("p");
        p2.textContent = formatDistance(task.dueDate, new Date(), { addSuffix: true });
        taskInfoDiv.appendChild(p2);
    } 

    let img = document.createElement("img");
    img.setAttribute("src", "./images/menu-down.svg");
    img.setAttribute("class", "down-icon");
    taskInfoDiv.appendChild(img);
    img.addEventListener("click", () => {
        rotateIcon(img);
        seeTaskDetails(taskDetailsDiv);
    });

    if (task.dueDate) {
        let p3 = document.createElement("p");
        p3.textContent = `Due Date: ${task.dueDate}`;
        taskDetailsDiv.appendChild(p3);
    }


    let p4 = document.createElement("p");
    if (task.description) {
        p4.textContent = `Description: ${task.description}`;
    } else {
        p4.textContent = `Description: -`;
    }
    taskDetailsDiv.appendChild(p4);

    if (task.workspace) {
        let p5 = document.createElement("p");
        p5.textContent = `Workspace: ${task.workspace}`;
        taskDetailsDiv.appendChild(p5);
    }

    taskDiv.appendChild(taskInfoDiv);
    taskDiv.appendChild(taskDetailsDiv);
    return taskDiv;
}

function seeTaskDetails(taskInfo) {
    taskInfo.classList.toggle("visible");
}

function rotateIcon(icon) {
    icon.classList.toggle("rotated");
    icon.classList.toggle("down-icon");
}

function taskCompleteToggle(domObject, task) {
    domObject.parentNode.classList.toggle("completed");
    task.completed ? task.completed = false : task.completed = true;
}