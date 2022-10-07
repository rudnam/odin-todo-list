// storage.js

import List from "./lists";
import ToDo from "./todos";

export const storages = (() => {

    const getData = () => {
        
        if (localStorage.getItem('lists') == null) {
            return null;
        }

        const data = JSON.parse(localStorage.getItem('lists'));
        console.log(JSON.parse(localStorage.getItem('lists')));

        const lists = [];

        data.forEach(function(list) {
            const newList = new List(list._name);

            list.items.forEach(function(task) {
                const newTodo = new ToDo(task._title,task._description);
                newList.addItem(newTodo);
            })

            lists.push(newList);
        });
        return lists;
    }

    return {getData};
})();