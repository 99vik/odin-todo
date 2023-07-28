import generateTaskDiv from "./generateTaskDiv";

export default function generateTabContent(_tasks, category) {
    const title = document.querySelector(".header-title");
    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    

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
        case "today":

        case "upcoming":

        case "completed":

    }
}