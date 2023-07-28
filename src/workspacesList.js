import renderWorkspaceTasks from "./renderWorkspaceTasks";

export default function generateWorkspacesList(_workspaces) {
    const list = document.querySelector(".workspaces-list");
    const workspaces = _workspaces
    workspaces.forEach(workspace => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = workspace.title;
        li.appendChild(span);
        list.appendChild(li);

        li.addEventListener("click", () => {
            renderWorkspaceTasks(workspace);
        });
    });
}