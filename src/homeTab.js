export default function homeTab(_tasks) {
    const content = document.querySelector(".content")
    const tasks = _tasks;
    tasks.forEach(task => {
        let taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task");

        let inputCheckbox = document.createElement("input");
        inputCheckbox.setAttribute("type", "checkbox");
        taskDiv.appendChild(inputCheckbox);

        let p1 = document.createElement("p");
        p1.textContent = task.title;
        taskDiv.appendChild(p1);

        let p2 = document.createElement("p");
        p2.textContent = task.dueDate;
        taskDiv.appendChild(p2);

        let img = document.createElement("img");
        img.setAttribute("src", "./images/menu-down.svg");
        img.setAttribute("class", "down-icon");
        taskDiv.appendChild(img);

        content.appendChild(taskDiv);
    });
}