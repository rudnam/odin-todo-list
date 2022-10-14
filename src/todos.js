// todos.js

export default class ToDo {
    constructor(title,description,parentid) {
        this.title = title;
        this.description = description;
        this.id = "id" + Math.random().toString(16).slice(2);
        this.parentid = parentid;
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
    get parentid() {
        return this._parentid;
    }
    set parentid(value) {
        this._parentid = value;
    }
}