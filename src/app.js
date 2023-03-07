// app.js

import List from './lists';
import ToDo from './todos';
import storage from './storage';

const app = (() => {
    let lists = storage.getData();

    const addList = (name) => {
        const newList = new List(name);
        lists.push(newList);
    
    };

    const sortList = (list, sortType=list.sortType) => {

        const listObj = list;
        switch (sortType) {
        case 1:
        // sort by date
            list.items.sort((a, b) => {
                if (a.dueDate === '' && b.dueDate) return 1;
                if (b.dueDate === '' && a.dueDate) return -1;

                if (a.dueDate < b.dueDate) {
                    return -1;
                }
                if (a.dueDate > b.dueDate) {
                    return 1;
                }
                return 0;
            });
            listObj.sortType = 1;
            break;

        case 2:
        // sort by priority (greater is higher)
            list.items.sort((a, b) => {
                if (Number(a.priority) > Number(b.priority)) {
                    return -1;
                }
                if (Number(a.priority) < Number(b.priority)) {
                    return 1;
                }
                return 0;
            });
            listObj.sortType = 2;
            break;

        default:
        // wont run
            break;
        }
    };

    const deleteList = (list) => {
        lists = lists.filter((i) => i.id !== list.id);
    
    };

    const addTodo = (title, description, listId, dueDate, priority, color) => {
        const newTodo = new ToDo(title, description, listId, dueDate, priority, color);
        lists.forEach((list) => {
            if (list.id === listId) {
                list.addItem(newTodo);
                sortList(list);
        
            }
        });
    };

    const updateTodo = (
        task,
        title = task.title,
        description = task.description,
        dueDate = task.dueDate,
        priority = task.priority,
        color = task.color
    ) => {
        const taskObj = task;
        taskObj.title = title;
        taskObj.description = description;
        taskObj.dueDate = dueDate;
        taskObj.priority = priority;
        taskObj.color = color;
        lists.forEach((list) => {
            if (list.id === task.parentid) {
                sortList(list);
        
            }
        });
    };

    const deleteTodo = (todo) => {
        lists.forEach((list) => {
            if (list.id === todo.parentid) {
                const listObj = list;
                listObj.items = list.items.filter((i) => i.id !== todo.id);
        
            }
        });
    };

    const completeTodo = (todo) => {
        lists.forEach((list) => {
            if (list.id === todo.parentid) {
                list.completeItem(todo);
        
            }
        });
    };

    const updateContent = () => {
        storage.storeData([...lists]);
    };

    const getContent = () => {
        updateContent();
        // temp
        console.log([...lists]);
        return [...lists];
    };

    return {
        addList,
        sortList,
        deleteList,
        addTodo,
        updateTodo,
        deleteTodo,
        completeTodo,
        getContent,
    };
})();

export default app;