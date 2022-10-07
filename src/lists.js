// lists.js

export default class List {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.id = "id" + Math.random().toString(16).slice(2);
    }
    getItems() {
        return [...this.items]
    }
    addItem(item) {
        this.items.push(item);
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
}