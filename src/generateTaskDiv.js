import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";

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
        const div = document.createElement("div");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        p.classList.add("details-title");
        p.textContent = "Due date:";
        p2.textContent = format(task.dueDate, 'dd. MMMM, hh:mm');
        div.appendChild(p);
        div.appendChild(p2);
        taskDetailsDiv.appendChild(div);
    }


    if (task.description) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        p.classList.add("details-title");
        p.textContent = "Description:";
        p2.textContent = task.description;
        div.appendChild(p);
        div.appendChild(p2);
        taskDetailsDiv.appendChild(div);
    } else {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        p.classList.add("details-title");
        p.textContent = `Description:`;
        p2.textContent = "-";
        div.appendChild(p);
        div.appendChild(p2);
        taskDetailsDiv.appendChild(div);

    }
    
    if (task.workspace) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        p.classList.add("details-title");
        p.textContent = "Workspace:";
        p2.textContent = task.workspace;
        div.appendChild(p);
        div.appendChild(p2);
        taskDetailsDiv.appendChild(div);
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