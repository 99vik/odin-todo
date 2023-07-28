import Task from "./taskClass";
import Workspace from "./workspaceClass";
import './style.css';
import generateTabContent from "./generateTabContent";
import generateWorkspacesList from "./workspacesList";


(function generateTabListeners() {
    const tabs = document.querySelectorAll(".tabs li");
    tabs.forEach( tab => {
        tab.addEventListener( "click", e => {
            generateTabContent(Task.allInstances, e.target.id);
        });
    });
})();

const workspace1 = new Workspace("workspace1");
const workspace2 = new Workspace("workspace2");

const task1 = new Task("task1", "task1 description", "date", workspace1);
const task2 = new Task("task2", "task2 description", "date", workspace1);
const task3 = new Task("task3", "task3 description", "date", workspace1);
const task4 = new Task("task4", "task4 description", "date", workspace2);
const task5 = new Task("task5", "task5 description", "date");
task1.completed = true;
task3.completed = true;

generateWorkspacesList(Workspace.allInstances);
generateTabContent(Task.allInstances, "home");
