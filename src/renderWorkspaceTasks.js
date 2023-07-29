import generateTaskDiv from "./generateTaskDiv";
import { openTaskModal } from "./createNewTask";

export default function renderWorkspaceTasks(workspace) {
    const header = document.querySelector(".content-header");
    header.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add(".header-title");
    title.textContent = workspace.title;
    header.appendChild(title);

    const btn = document.createElement("button");
    btn.innerHTML = "New task";
    btn.classList.add("create-btn");
    btn.addEventListener("click", () => {
        openTaskModal(workspace);
    });
    header.appendChild(btn);

    let tasks = workspace.tasks;
    const content = document.querySelector(".content")
    content.innerHTML = "";
    tasks.forEach(task => {
        let taskDiv = generateTaskDiv(task);
        content.appendChild(taskDiv);
    });
}