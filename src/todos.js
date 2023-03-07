// todos.js

export default class ToDo {
    constructor(title, description, parentid, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.id = `id${Math.random().toString(16).slice(2)}`;
        this.parentid = parentid;
        this.priority = priority || 0;
        this.dueDate = dueDate;
    }
}