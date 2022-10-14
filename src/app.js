// app.js

import List from "./lists";
import ToDo from "./todos";
import { storages } from "./storage";

export const app = (() => {
    let lists = storages.getData() || [];

    const addList = (name) => {
        const newList = new List(name);
        lists.push(newList);
        return;
    }

    const deleteList = (list) => {
        lists = lists.filter((i) => i.id != list.id);
        return;
    }

    const addTodo = (title, description, listId) => {
        const newTodo = new ToDo(title, description, listId);
        lists.forEach(function(list) {
            if (list.id == listId) {
                list.addItem(newTodo);
                return;
            }
        })
    }

    const deleteTodo = (todo) => {
        lists.forEach(function(list) {
            if (list.id == todo.parentid) {
                list.items = list.items.filter((i) => i.id != todo.id);
                return;
            }
        })
    }

    const completeTodo = (todo) => {
        lists.forEach(function(list) {
            if (list.id == todo.parentid) {
                list.completeItem(todo);
                return;
            }
        })
    }

    const getContent = () => {
        updateContent();
        // temp
        console.log([...lists]);
        return [...lists];
    }

    const updateContent = () => {
        storages.storeData([...lists]);
    }

    return {addList,
            deleteList,
            addTodo,
            deleteTodo,
            completeTodo,
            getContent,}
})();
