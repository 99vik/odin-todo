import Task from "./taskClass";
import Workspace from "./workspaceClass";
import renderWorkspaceTasks from "./renderWorkspaceTasks";
import generateTabContent from "./generateTabContent";
import showActiveTab from "./showActiveTab";

export function createTask(_name, _description, _dueDate, _workspace) {
    if (_workspace == '') {
        _workspace = null;
    } else {
        _workspace = Workspace.allInstances.find( workspace => workspace.title == _workspace );
    }
    new Task(_name, _description, _dueDate, _workspace);
}

export function openTaskModal(mode) {
    const closeBtn = document.querySelector(".task-modal .close-btn");
    const modal = document.querySelector(".modal");
    const modalCreateTask = document.querySelector(".modal-container.task-modal");
    const createBtn = document.querySelector("#create-task");

    const nameInput = document.querySelector("#task-name");
    const descriptionInput = document.querySelector("#task-description");
    const dueDateInput = document.querySelector("#task-duedate");
    const workspaceInput = document.querySelector("#task-workspace");
    nameInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    workspaceInput.value = "";

    if (mode == "home") {
        const option = document.createElement("option");
        option.textContent = "";
        workspaceInput.appendChild(option);

        Workspace.allInstances.forEach( workspace => {
            const option = document.createElement("option");
            option.textContent = workspace.title;
            workspaceInput.appendChild(option);
        });
    } else {
        workspaceInput.setAttribute("disabled", "");
        const option = document.createElement("option");
        option.textContent = mode.title;
        workspaceInput.appendChild(option);
    }
    

    closeBtn.onclick = () => {
        modal.classList.toggle("show");
        modalCreateTask.classList.toggle("show");
    };
    createBtn.onclick = () => {
        createTask(nameInput.value, descriptionInput.value, dueDateInput.value, workspaceInput.value);
        modal.classList.toggle("show");
        modalCreateTask.classList.toggle("show");
        if (mode == "home") {
            generateTabContent(Task.allInstances, "home");
        } else {
            renderWorkspaceTasks(mode);
        }
    };

    modal.classList.toggle("show");
    modalCreateTask.classList.toggle("show");
}