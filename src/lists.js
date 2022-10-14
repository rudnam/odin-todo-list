// lists.js

export default class List {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.id = "id" + Math.random().toString(16).slice(2);
        this.completed = [];
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
    completeItem(item) {
        this.items = this.items.filter((i) => i.id != item.id);
        this.completed.push(item);
    }
    recoverItem(item) {
        this.completed = this.completed.filter((i) => i.id != item.id);
        this.items.push(item);
    }
}