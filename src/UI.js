// UI.js

import { app } from "./app";
import checkOutline from './images/check_outline.svg';
import check from './images/check.svg';
import close from './images/close.svg';
import more from './images/more.svg';
import add from './images/add.svg';

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

    const createTodo = (task) => {
        const todo = document.createElement('div');
        const todoMark = document.createElement('img');
        const todoBody = document.createElement('div');
        const todoTitle = document.createElement('p');
        const todoDesc = document.createElement('p');
        const todoEditBody = document.createElement('div');
        const todoEditTitle = document.createElement('input');
        const todoEditDesc = document.createElement('textarea');
        const todoClose = document.createElement('img');

        
        todoMark.onmouseover = function() {
            todoMark.src = check;
        }
        todoMark.onmouseout = function() {
            todoMark.src = checkOutline;
        }
        
        todoMark.onclick = function() {
            app.completeTodo(task);
            update();
        }

        todoClose.onclick = function() {
            app.deleteTodo(task);
            update();
        }
        
        todo.onmouseover = function() {
            todoClose.style.visibility = 'visible';
        }
        todo.onmouseout = function() {
            todoClose.style.visibility = 'hidden';
        }

        todo.onclick = function() {
            todoBody.style.display = 'none';
            todoEditBody.style.display = 'flex';

            document.body.onclick = function(e) {
                if (!todo.contains(e.target)) {
                    task.title = todoEditTitle.value;
                    task.description = todoEditDesc.value;
                    todoBody.style.display = 'flex';
                    todoEditBody.style.display = 'none';
                    
                    update();
                }
            }
        }

        todoEditBody.classList.add('todo-edit-body');
        todoEditTitle.classList.add('todo-edit-title');
        todoEditDesc.classList.add('todo-edit-desc');
        

        todoEditBody.style.display = 'none';
        todoEditTitle.placeholder = 'Title';
        todoEditTitle.value = task.title;
        todoEditDesc.placeholder = 'description';
        todoEditDesc.value = task.description;

        todoClose.src = close;
        todoClose.style.visibility = 'hidden';
        todoClose.classList.add('todo-close');
        todoMark.src = checkOutline;
        todoMark.classList.add('todo-mark');
        todoTitle.innerText = task.title;
        todoTitle.classList.add('todo-title');
        todoDesc.classList.add('todo-desc');
        todoDesc.classList.add('hide-overflow');
        todoDesc.innerText = task.description;
        todoBody.classList.add('todo-body');

        todoEditBody.appendChild(todoEditTitle);
        todoEditBody.appendChild(todoEditDesc);
        todoBody.appendChild(todoTitle);
        todoBody.appendChild(todoDesc);
        todo.appendChild(todoMark);
        todo.appendChild(todoBody);
        todo.appendChild(todoEditBody);
        todo.appendChild(todoClose);

        todo.classList.add('todo');
        return todo;
    }

    const createAddTodo = (listid) => {
        const addTodo = document.createElement('div');
        const addTodoLabel = document.createElement('p');
        const addTodoForm = document.createElement('div');
        const addTodoInput = document.createElement('input');
        const addTodoArea = document.createElement('textarea');
        const addTodoMark = document.createElement('img');

        addTodoMark.classList.add('add-todo-mark');
        addTodoMark.src = add;
        addTodo.appendChild(addTodoMark);
        addTodoLabel.innerText = "Add a task";
        addTodoLabel.classList.add('add-todo-label');
        addTodoInput.classList.add('add-todo-input');
        addTodoInput.placeholder = "Title";
        addTodoArea.classList.add('add-todo-area');
        addTodoArea.placeholder = "description";
        addTodoForm.style.display = 'none';
        addTodoForm.appendChild(addTodoInput);
        addTodoForm.appendChild(addTodoArea);
        addTodoForm.classList.add('add-todo-form');
        addTodo.appendChild(addTodoLabel);
        addTodo.appendChild(addTodoForm);
        addTodo.classList.add('todo');
        addTodo.classList.add('add-todo');

        addTodo.onclick = function(e) {
            addTodoLabel.style.display = 'none';
            addTodoMark.style.display = 'none';
            addTodoForm.style.display = 'flex';

            document.body.onclick = function(e) {
                if (!addTodo.contains(e.target)) {
                    addTodoLabel.style.display = 'block';
                    addTodoMark.style.display = 'block';
                    addTodoForm.style.display = 'none';
                }
            }
        }

        addTodoForm.addEventListener('keyup', function(e) {
            if (e.key == 'Enter' && addTodoInput.value) {
                app.addTodo(addTodoInput.value,addTodoArea.value,listid);
                addTodoLabel.style.display = 'block';
                addTodoMark.style.display = 'block';
                addTodoForm.style.display = 'none';
                addTodoInput.value = '';
                addTodoArea.value = '';
                update();
            }
        })
        

        return addTodo;
        
    }

    const createList = (list) => {
        const divList = document.createElement('div');
        const divListHeader = document.createElement('div');
        const divListTitle = document.createElement('p');
        const divListOptions = document.createElement('img');
        const divListItems = document.createElement('ul');
        const popover = createPopover(list);


        divListOptions.classList.add('list-options');
        divListOptions.src = more;
        divListTitle.innerText = list.name;
        divListTitle.contentEditable = 'true';
        divListTitle.classList.add('list-title');
        divList.classList.add('list');
        divListHeader.classList.add('list-header');
        divListHeader.appendChild(divListTitle);
        divListHeader.appendChild(divListOptions);
        divListHeader.appendChild(popover);
        divList.appendChild(divListHeader);
        divList.appendChild(divListItems);

        divListOptions.onclick = function(e) {
            popover.style.display = 'block';

            document.body.onclick = function(e) {
                if (!divListOptions.contains(e.target)) {
                    popover.style.display = 'none';
                }
            }
        }

        list.getItems().forEach(function(todo) {
            divListItems.appendChild(createTodo(todo));
        })
        divListItems.appendChild(createAddTodo(list.id));

        divListTitle.addEventListener('focusout', function() {
            list.name = divListTitle.innerText;
            update();
        })

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


        addList.onclick = function(e) {
            addListLabel.style.display = 'none';
            addListInput.style.display = 'block';
            addListInput.focus();

            document.body.onclick = function(e) {
                if (!addList.contains(e.target)) {
                    addListLabel.style.display = 'block';
                    addListInput.style.display = 'none';
                }
            }
        }

        addListInput.addEventListener('keyup', function(e) {
            if (e.key == 'Enter' && addListInput.value) {
                
                app.addList(addListInput.value);
                addListLabel.style.display = 'block';
                addListInput.style.display = 'none';
                addListInput.value = '';
                update();
            }
        })

        return addList;
    }

    const createPopover = (list) => {
        const anchor = document.createElement('div');
        const popover = document.createElement('div');
        const popoverLabel = document.createElement('p');
        const popoverSort = document.createElement('ul');
        const popoverDate = document.createElement('li');
        const popoverCustom = document.createElement('li');
        const popoverOptions = document.createElement('ul');
        const popoverDelete = document.createElement('li');
        const popoverSetcolor = document.createElement('li');

        popover.classList.add('popover');
        popoverLabel.innerText = 'Sort by:'
        popoverLabel.classList.add('popover-label');
        anchor.classList.add('anchor');
        popoverSort.classList.add('popover-sort');
        popoverOptions.classList.add('popover-options');
        popoverDate.innerText = 'Date';
        popoverCustom.innerText = 'Custom';
        popoverDelete.innerText = 'Delete list';
        popoverSetcolor.innerText = 'Set color';

        popoverDelete.onclick = function(e) {
            app.deleteList(list);
            update();
        }

        anchor.appendChild(popover);
        popover.appendChild(popoverLabel);
        popover.appendChild(popoverSort);
        popoverSort.appendChild(popoverDate);
        popoverSort.appendChild(popoverCustom);
        popover.appendChild(popoverOptions);
        popoverOptions.appendChild(popoverDelete);
        popoverOptions.appendChild(popoverSetcolor);

        return anchor;
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