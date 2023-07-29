import Task from "./taskClass";

export function createTask() {
    console.log("crate task");

    
}

export function openTaskModal() {
    console.log("open");
    const closeBtn = document.querySelector(".task-modal .close-btn");
    const modal = document.querySelector(".modal");
    const modalCreateTask = document.querySelector(".modal-container.task-modal");
    console.log(modalCreateTask);

    closeBtn.addEventListener("click", () => {
        modal.classList.toggle("show");
        modalCreateTask.classList.toggle("show");
    });
    modal.classList.toggle("show");
    modalCreateTask.classList.toggle("show");
}