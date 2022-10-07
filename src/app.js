// app.js

import List from "./lists";
import ToDo from "./todos";

export const app = (() => {
    let lists = [];

    const addList = (name) => {
        const newList = new List(name);
        lists.push(newList);
    }

    const addTodo = (title, description, listId) => {
        const newTodo = new ToDo(title, description);
        lists.forEach(function(list) {
            if (list.id == listId) {
                list.addItem(newTodo);
            }
        })
    }
    const getContent = () => {
        console.log([...lists]);
        return [...lists];
    }

    return {addList,
            addTodo,
            getContent,}
})();
