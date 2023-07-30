import renderWorkspaceTasks from "./renderWorkspaceTasks";
import showActivetab from "./showActiveTab";

export default function generateWorkspacesList(_workspaces) {
    const list = document.querySelector(".workspaces-list");
    list.innerHTML = "";
    const workspaces = _workspaces
    workspaces.forEach(workspace => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = workspace.title;
        li.appendChild(span);
        list.appendChild(li);

        li.addEventListener("click", (e) => {
            renderWorkspaceTasks(workspace);
            if (e.target.tagName == "SPAN") {
                showActivetab(e.target.parentNode);
            } else {
                showActivetab(e.target);
            }
        });
    });
}