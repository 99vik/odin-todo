class Workspace {
    static allInstances = [];
    
    constructor(title) {
        this.title = title;
        this.tasks = [];
        Workspace.allInstances.push(this);
    }
}

export default Workspace;