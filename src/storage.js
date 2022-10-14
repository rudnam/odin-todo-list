// storage.js

import List from "./lists";
import ToDo from "./todos";

export const storages = (() => {

    const getData = () => {
        
        if (localStorage.getItem('listdata') == null) {
            return null;
        }

        const data = JSON.parse(localStorage.getItem('listdata'));
        console.log(JSON.parse(localStorage.getItem('listdata')));

        const lists = [];

        data.forEach(function(list) {
            const newList = new List(list._name);

            list.items.forEach(function(task) {
                const newTodo = new ToDo(task._title,task._description,newList.id);
                newList.addItem(newTodo);
            })

            lists.push(newList);
        });
        return lists;
    };

    const storeData = (lists) => {
        localStorage.setItem('listdata', JSON.stringify(lists));
        return;
    }


    return {getData,
            storeData,};
})();