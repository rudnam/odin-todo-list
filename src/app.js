// app.js

import List from "./lists";
import ToDo from "./todos";
import { storages } from "./storage";

export const app = (() => {
    let lists = storages.getData() || [];

    const addList = (name) => {
        const newList = new List(name);
        lists.push(newList);
    }

    const addTodo = (title, description, listId) => {
        const newTodo = new ToDo(title, description, listId);
        lists.forEach(function(list) {
            if (list.id == listId) {
                list.addItem(newTodo);
            }
        })
    }

    const removeTodo = (todo) => {
        lists.forEach(function(list) {
            if (list.id == todo.parentid) {
                list.items = list.items.filter((item) => item.id != todo.id);
            }
        })

    }

    const getContent = () => {
        updateContent();
        console.log([...lists]);
        return [...lists];
    }

    const updateContent = () => {
        localStorage.setItem('lists', JSON.stringify(lists));
    }

    return {addList,
            addTodo,
            removeTodo,
            getContent,}
})();
