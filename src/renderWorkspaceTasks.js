import generateTaskDiv from "./generateTaskDiv";

export default function renderWorkspaceTasks(workspace) {
    const title = document.querySelector(".header-title");
    title.textContent = workspace.title;
    let tasks = workspace.tasks;
    const content = document.querySelector(".content")
    content.innerHTML = "";
    tasks.forEach(task => {
        let taskDiv = generateTaskDiv(task);
        content.appendChild(taskDiv);
    });
}