// todos.js

export default class ToDo {
    constructor(title,description) {
        this.title = title;
        this.description = description;
        this.id = "id" + Math.random().toString(16).slice(2);
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}