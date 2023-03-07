// storage.js

import List from './lists';
import ToDo from './todos';

const storage = (() => {
    const getData = () => {
        // // actual code
        // if (localStorage.getItem('listdata') == null) {
        //     return [];
        // }
        // const data = JSON.parse(localStorage.getItem('listdata'));

        // for demo
        const listdata = '[{"name":"Uni","items":[{"title":"Do book report","description":"","id":"id3e6b569707b15","parentid":"id1fe948610e4a2","priority":"0","dueDate":"2023-03-08","color":"#a9adc1"},{"title":"Review for exam","description":"link: https://www.youtube.com/watch?v=dQw4w9WgXcQ","id":"id723c2cae3846f8","parentid":"id1fe948610e4a2","priority":"0","dueDate":"2023-03-09","color":"#a9adc1"},{"title":"Submit project","description":"","id":"id6432ed7bd632d","parentid":"id1fe948610e4a2","priority":"0","dueDate":"2023-03-16","color":"#ff8000"}],"id":"id1fe948610e4a2","completed":[],"sortType":1},{"name":"日本語の勉強","items":[{"title":"アニメを見る","description":"Re:ゼロから始める異世界生活","id":"ida5296ac87f1a4","parentid":"id49754b58f737a","priority":"0","dueDate":"2023-03-11","color":"#80ffff"},{"title":"漫画を読む","description":"けいおん！Shuffle","id":"id26f6cd0edcdeb8","parentid":"id49754b58f737a","priority":"0","dueDate":"","color":"#ffff80"}],"id":"id49754b58f737a","completed":[],"sortType":1},{"name":"Personal","items":[],"id":"ide6a8cd3a94af78","completed":[],"sortType":1}]';
        const data = localStorage.getItem('listdata') == null ? JSON.parse(listdata) : JSON.parse(localStorage.getItem('listdata'));

        const lists = [];

        data.forEach((list) => {
            const newList = new List(list.name,list.sortType);

            list.items.forEach((task) => {
                const newTodo = new ToDo(
                    task.title,
                    task.description,
                    newList.id,
                    task.dueDate,
                    task.priority,
                    task.color
                );
                newList.addItem(newTodo);
            });

            lists.push(newList);
        });

        return lists;
    };

    const storeData = (lists) => {
        localStorage.setItem('listdata', JSON.stringify(lists));
    
    };

    return { getData, storeData };
})();

export default storage;