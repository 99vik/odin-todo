class Task {
    static allInstances = [];

    constructor(title, description = null, dueDate = null, workspace = null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
        if (workspace != null) {
            workspace.tasks.push(this);
            this.workspace = workspace.title;
        } else {
            this.workspace = workspace
        }
        Task.allInstances.push(this);
    }
}

export default Task;