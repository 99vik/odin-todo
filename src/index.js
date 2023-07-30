import Task from "./taskClass";
import Workspace from "./workspaceClass";
import './style.css';
import generateTabContent from "./generateTabContent";
import generateWorkspacesList from "./workspacesList";
import createNewWorkspace from "./createNewWorkspace";
import showActivetab from "./showActiveTab";

const workspace1 = new Workspace("workspace1");
const workspace2 = new Workspace("workspace2");

const task1 = new Task("task1", "task1 description", "2023-07-30T15:50", workspace1);
const task2 = new Task("task2", "task2 description", "2023-08-30T15:50", workspace1);
const task3 = new Task("task3", "task3 description", "2023-07-29T15:50", workspace1);
const task4 = new Task("task4", "task4 description", "2023-08-01T15:50", workspace2);
const task5 = new Task("task5", "task5 description", "2023-07-30T10:50");
const task6 = new Task("task6");
task1.completed = true;
task3.completed = true;

generateWorkspacesList(Workspace.allInstances);
generateTabContent(Task.allInstances, "home");
showActivetab(document.querySelector("#home"));
