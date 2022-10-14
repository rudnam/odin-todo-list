// todos.js

export default class ToDo {
    constructor(title,description,parentid) {
        this.title = title;
        this.description = description;
        this.id = "id" + Math.random().toString(16).slice(2);
        this.parentid = parentid;
    }
}