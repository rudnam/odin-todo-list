// app.js

import List from "./lists";
import ToDo from "./todos";
import { storages } from "./storage";

export const app = (() => {

    let data = storages.getData();
    let lists = data ? data[0] : [];

    const addList = (name) => {
        const newList = new List(name);
        lists.push(newList);
        return;
    }

    const sortList = (list) => {

        switch (list.sortType) {
            case 1:
                // sort by date
                list.items.sort((a,b) => {
                    if (a.dueDate < b.dueDate) {
                        return -1;
                    }
                    if (a.dueDate > b.dueDate) {
                        return 1;
                    }
                    return 0;
                })
                list.sortType = 1;
                break;
            
            case 2:
                // sort by priority
                list.items.sort((a,b) => {
                    if (a.priority < b.priority) {
                        return -1;
                    }
                    if (a.priority > b.priority) {
                        return 1;
                    }
                    return 0;
                })
                list.sortType = 2;
                break;
        
            default:
                // wont run
                break;
        }
    }

    const deleteList = (list) => {
        lists = lists.filter((i) => i.id != list.id);
        return;
    }

    const addTodo = (title, description, listId, dueDate) => {
        const newTodo = new ToDo(title, description, listId, dueDate);
        lists.forEach(function(list) {
            if (list.id == listId) {
                list.addItem(newTodo);
                sortList(list);
                return;
            }
        })
    }

    const updateTodo = (task, title=task.title, description=task.description, dueDate=task.dueDate) => {
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        lists.forEach(function(list) {
            if (list.id == task.parentid) {
                sortList(list);
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
            sortList,
            deleteList,
            addTodo,
            updateTodo,
            deleteTodo,
            completeTodo,
            getContent,}
})();
