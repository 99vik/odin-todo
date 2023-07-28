export default function generateTaskDiv(task) {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task");
    let taskInfoDiv = document.createElement("div");
    taskInfoDiv.setAttribute("class", "task-info");
    let taskDetailsDiv = document.createElement("div");
    taskDetailsDiv.setAttribute("class", "task-details");

    let inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type", "checkbox");
    taskInfoDiv.appendChild(inputCheckbox);

    let p1 = document.createElement("p");
    p1.textContent = task.title;
    taskInfoDiv.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = task.dueDate;
    taskInfoDiv.appendChild(p2);

    let img = document.createElement("img");
    img.setAttribute("src", "./images/menu-down.svg");
    img.setAttribute("class", "down-icon");
    taskInfoDiv.appendChild(img);
    img.addEventListener("click", () => {
        rotateIcon(img);
        seeTaskDetails(taskDetailsDiv);
    });

    let p3 = document.createElement("p");
    p3.textContent = `Due Date: ${task.dueDate}`;
    taskDetailsDiv.appendChild(p3);

    let p4 = document.createElement("p");
    p4.textContent = `Description: ${task.description}`;
    taskDetailsDiv.appendChild(p4);

    let p5 = document.createElement("p");
    p5.textContent = `Workspace: ${task.workspace}`;
    taskDetailsDiv.appendChild(p5);

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