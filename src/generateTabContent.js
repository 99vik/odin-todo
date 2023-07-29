import generateTaskDiv from "./generateTaskDiv";
import Task from "./taskClass";
import { openTaskModal } from "./createNewTask";

export default function generateTabContent(_tasks, category) {
    const header = document.querySelector(".content-header");
    header.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add(".header-title");
    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    header.appendChild(title);

    if (category == "home") {
        const btn = document.createElement("button");
        btn.innerHTML = "New task";
        btn.classList.add("create-btn");
        btn.addEventListener("click", () => {
            openTaskModal("home");
        });
        header.appendChild(btn);
    }

    const tasks = tabCases(category, _tasks);
    insertTasksInContent(tasks);
}

function insertTasksInContent(tasks) {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    tasks.forEach(task => {
        let taskDiv = generateTaskDiv(task);
        content.appendChild(taskDiv);
    });
}

function tabCases(category, tasks) {
    switch (category) {
        case "home":
            return tasks;
        case "uncategorized":
            return tasks.filter( task => task.workspace == null );
        case "upcoming":
            return tasks.filter( task => task.completed == false );
        case "completed":
            return tasks.filter( task => task.completed == true );
    }
}

(() => {
    const tabs = document.querySelectorAll(".tabs li");
    tabs.forEach( tab => {
        tab.addEventListener( "click", e => {
            generateTabContent(Task.allInstances, e.target.id);
        });
    });
})();
