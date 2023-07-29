import Workspace from "./workspaceClass";
import generateWorkspacesList from "./workspacesList";

export default (function createWorkspace() {
    const addBtn = document.querySelector(".create-workspace-btn");
    const closeBtn = document.querySelector(".workspace-modal .close-btn");
    const modal = document.querySelector(".modal");
    const modalCreateWorkspace = document.querySelector(".modal-container.workspace-modal");
    const createBtn = document.querySelector("#create-workspace");
    const nameInput = document.querySelector("#workspace-name");

    addBtn.addEventListener("click", () => {
        modal.classList.toggle("show");
        modalCreateWorkspace.classList.toggle("show");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.toggle("show");
        modalCreateWorkspace.classList.toggle("show");
    });

    createBtn.addEventListener("click", () => {
        createNewWorkspace(nameInput.value);
        nameInput.value = "";
        generateWorkspacesList(Workspace.allInstances);
        modal.classList.toggle("show");
        modalCreateWorkspace.classList.toggle("show");
    });
})();

function createNewWorkspace(name) {
    new Workspace(name);
}