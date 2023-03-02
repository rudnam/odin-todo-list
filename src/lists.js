// lists.js

export default class List {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.id = "id" + Math.random().toString(16).slice(2);
        this.completed = [];
        this.sortType = 1;
    }

    addItem(item) {
        this.items.push(item);
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