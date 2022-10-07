// UI.js

import { app } from "./app";

const DOM = (() => {
    const createTitle = () => {
        const title = document.createElement('div');
        const addListLabel = document.createElement('addListLabel');
    
        title.appendChild(addListLabel);
    
        title.id = 'title';
        addListLabel.innerText = "My Tasks";
    
        return title;
    }
    const createContainer = () => {
        const container = document.createElement('div');
    
        container.id = 'container';
    
        container.appendChild(createAddList());
    
        return container;
    }

    const createTodo = (todo) => {
        const item = document.createElement('li');
        item.innerText = todo.title;
        item.classList.add('todo');
        return item;
    }

    const createAddTodo = (listid) => {
        const addTodo = document.createElement('li');
        const addTodoLabel = document.createElement('p');
        const addTodoInput = document.createElement('input');

        addTodoLabel.innerText = "+ Add a task";
        addTodoLabel.classList.add('add-todo-label');
        addTodoInput.classList.add('add-todo-input');
        addTodoInput.placeholder = "Title";
        addTodoInput.style.display = 'none';
        addTodo.appendChild(addTodoLabel);
        addTodo.appendChild(addTodoInput);
        addTodo.classList.add('todo');
        addTodo.dataset.listid = listid;

        document.body.addEventListener('click', function(e) {
            if (addTodo.contains(e.target)) {
                addTodoLabel.style.display = 'none';
                addTodoInput.style.display = 'block';
                addTodoInput.focus();
            } else {
                addTodoLabel.style.display = 'block';
                addTodoInput.style.display = 'none';
            }
        });

        addTodoInput.addEventListener('keyup', function(e) {
            if (e.key == 'Enter') {
                app.addTodo(addTodoInput.value,'test description',listid);
                addTodoLabel.style.display = 'block';
                addTodoInput.style.display = 'none';
                addTodoInput.value = '';
                update();
            }
        })

        return addTodo;
        
    }

    const createList = (list) => {
        const divList = document.createElement('div');
        const h = document.createElement('p');
        const ul = document.createElement('ul');

        h.innerText = list.name;
        h.contentEditable = 'true';
        divList.classList.add('list');
        divList.appendChild(h);
        divList.appendChild(ul);
        list.getItems().forEach(function(todo) {
            ul.appendChild(createTodo(todo));
        })
        ul.appendChild(createAddTodo(list.id));

        return divList;
    }

    const createAddList = () => {
        const addList = document.createElement('div');
        const addListLabel = document.createElement('p');
        const addListInput = document.createElement('input');

        addListLabel.innerText = "+ Add new list";
        addListLabel.id = 'add-list-label'
        addListInput.id = 'add-list-input'
        addListInput.placeholder = "New list";
        addListInput.style.display = 'none';
        addList.appendChild(addListLabel);
        addList.appendChild(addListInput);
        addList.classList.add('list');
        addList.id = 'add-list';

        document.body.addEventListener('click', function(e) {
            if (addList.contains(e.target)) {
                addListLabel.style.display = 'none';
                addListInput.style.display = 'block';
                addListInput.focus();
            } else {
                addListLabel.style.display = 'block';
                addListInput.style.display = 'none';
            }
        });

        addListInput.addEventListener('keyup', function(e) {
            if (e.key == 'Enter') {
                
                app.addList(addListInput.value);
                addListLabel.style.display = 'block';
                addListInput.style.display = 'none';
                addListInput.value = '';
                update();
            }
        })

        return addList;
    }

    const update = () => {
        const container = document.querySelector('#container');
        const data = app.getContent();

        while (container.firstChild.id !== 'add-list') {
            container.removeChild(container.firstChild);
        }

        data.forEach(function(item) {
            container.appendChild(createList(item));
        })
        container.appendChild(document.querySelector('#add-list'))
    }

    return {createTitle,
            createContainer,
            update,};
})();

export default function loadUI() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    content.appendChild(DOM.createTitle());
    content.appendChild(DOM.createContainer());
    DOM.update();
}