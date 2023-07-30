import Task from "./taskClass";
import Workspace from "./workspaceClass";
import './style.css';
import generateTabContent from "./generateTabContent";
import generateWorkspacesList from "./workspacesList";
import createNewWorkspace from "./createNewWorkspace";
import showActivetab from "./showActiveTab";

const personal = new Workspace("Personal");
const shopping = new Workspace("Shopping");
const work = new Workspace("Work");

const p1 = new Task("Dentist", "Go to dentist", new Date().getTime() + (0.72 * 60 * 60 * 1000), personal);
const p2 = new Task("Pick up delivery", "Pick up delivery at the post", new Date().getTime() + (2 * 60 * 60 * 1000), personal);
const p3 = new Task("Call John", null , null, personal);

const s1 = new Task("Chicken", null, null, shopping);
const s2 = new Task("Bananas", null, null, shopping);
s2.completed = true;
const s3 = new Task("Apples", null, null, shopping);
s3.completed = true;
const s4 = new Task("Bread", null, null, shopping);
const s5 = new Task("Potato", null, null, shopping);

const w1 = new Task("Research", "Research for new project", null, work);
const w2 = new Task("Read documentation", "Pages from 30-39", null, work);
const w3 = new Task("Send mail", "Send mail to customer", new Date().getTime() + (6.2 * 60 * 60 * 1000), work);
const w4 = new Task("Finish design on the project", null, new Date().getTime() + (53 * 60 * 60 * 1000), work);
w4.completed = true;

generateWorkspacesList(Workspace.allInstances);
generateTabContent(Task.allInstances, "home");
showActivetab(document.querySelector("#home"));
