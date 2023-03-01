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
    
        title.id = 'title';
        title.innerText = "My Tasks";
    
        return title;
    };

    const createContainer = () => {
        const container = document.createElement('div');
    
        container.id = 'container';
    
        container.appendChild(createAddList());
    
        return container;
    };

    const createAddList = () => {
        const addList = document.createElement('div');
        const addListLabel = document.createElement('p');
        const addListInput = document.createElement('input');

        addList.id = 'add-list';
        addList.classList.add('list');
        addListLabel.id = 'add-list-label'
        addListInput.id = 'add-list-input'

        addListLabel.innerText = "+ Add new list";
        addListInput.placeholder = "New list";
        addListInput.style.display = 'none';

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

        addList.appendChild(addListLabel);
        addList.appendChild(addListInput);

        return addList;
    };

    const createList = (list) => {
        const divList = document.createElement('div');
        const divListHeader = document.createElement('div');
        const divListTitle = document.createElement('p');
        const divListOptions = document.createElement('img');
        const divListItems = document.createElement('ul');
        const popover = createPopover(list);

        divList.classList.add('list');
        divListHeader.classList.add('list-header');
        divListTitle.classList.add('list-title');
        divListOptions.classList.add('list-options');
        divListItems.classList.add('list-items');
        divListTitle.innerText = list.name;
        divListTitle.contentEditable = 'true';
        divListOptions.src = more;
        
        divListTitle.addEventListener('focusout', function() {
            list.name = divListTitle.innerText;
            update();
        })

        divListOptions.onclick = function(e) {
            popover.style.display = 'block';
            document.body.onclick = function(e) {
                if (!divListOptions.contains(e.target) && !popover.contains(e.target)) {
                    popover.style.display = 'none';
                }
            }
        }

        divList.appendChild(divListHeader);
        divList.appendChild(divListItems);
        list.items.forEach(function(todo) {
            divListItems.appendChild(createTodo(todo));
        });
        divListItems.appendChild(createAddTodo(list.id));
        divListHeader.appendChild(divListTitle);
        divListHeader.appendChild(divListOptions);
        divListHeader.appendChild(popover);
        
        return divList;
    };

    const createTodo = (task) => {
        const todo = document.createElement('div');
        const todoMark = document.createElement('img');
        const todoBody = document.createElement('div');
        const todoTitle = document.createElement('p');
        const todoDesc = document.createElement('p');
        const todoDate = document.createElement('p');
        const todoEditBody = document.createElement('div');
        const todoEditTitle = document.createElement('input');
        const todoEditDesc = document.createElement('textarea');
        const todoEditDate = document.createElement('input');
        const todoClose = document.createElement('img');

        todo.classList.add('todo');
        todoMark.classList.add('todo-mark');
        todoBody.classList.add('todo-body');
        todoTitle.classList.add('todo-title');
        todoDesc.classList.add('todo-desc');
        todoDesc.classList.add('hide-overflow');
        todoDate.classList.add('todo-date');
        todoEditBody.classList.add('todo-edit-body');
        todoEditTitle.classList.add('todo-edit-title');
        todoEditDesc.classList.add('todo-edit-desc');
        todoEditDate.classList.add('todo-edit-date');
        todoClose.classList.add('todo-close');
        todoMark.src = checkOutline;
        todoTitle.innerText = task.title;
        todoDesc.innerText = task.description;
        todoDate.innerHTML = task.dueDate ? `Due: <i>${task.dueDate}</i>` : '';
        todoEditTitle.placeholder = 'Title';
        todoEditTitle.value = task.title;
        todoEditDesc.placeholder = 'description';
        todoEditDesc.value = task.description;
        todoEditDate.value = task.dueDate;
        todoClose.src = close;
        
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

        todo.onmouseover = function() {
            todoClose.style.visibility = 'visible';
        }
        todo.onmouseout = function() {
            todoClose.style.visibility = 'hidden';
        }
        todoClose.onclick = function() {
            app.deleteTodo(task);
            update();
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

        todo.appendChild(todoMark);
        todo.appendChild(todoBody);
        todo.appendChild(todoEditBody);
        todo.appendChild(todoClose);
        todoBody.appendChild(todoTitle);
        todoBody.appendChild(todoDesc);
        todoBody.appendChild(todoDate);
        todoEditBody.appendChild(todoEditTitle);
        todoEditBody.appendChild(todoEditDesc);
        todoEditBody.appendChild(todoEditDate);
        
        return todo;
    }

    const createAddTodo = (listid) => {
        const addTodo = document.createElement('div');
        const addTodoLabel = document.createElement('p');
        const addTodoForm = document.createElement('div');
        const addTodoInput = document.createElement('input');
        const addTodoArea = document.createElement('textarea');
        const addTodoDate = document.createElement('input');
        const addTodoMark = document.createElement('img');

        addTodo.classList.add('add-todo');
        addTodoMark.classList.add('add-todo-mark');
        addTodoLabel.classList.add('add-todo-label');
        addTodoForm.classList.add('add-todo-form');
        addTodoInput.classList.add('add-todo-input');
        addTodoArea.classList.add('add-todo-area');
        addTodoDate.classList.add('add-todo-date')
        addTodoDate.type = "date";
        addTodoMark.src = add;
        addTodoLabel.innerText = "Add a task";
        addTodoInput.placeholder = "Title";
        addTodoArea.placeholder = "description";
        
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

        addTodo.onkeyup = function(e) {
            if (e.key == 'Enter' && addTodoInput.value) {
                app.addTodo(addTodoInput.value,addTodoArea.value,listid,addTodoDate.value);
                addTodoLabel.style.display = 'block';
                addTodoMark.style.display = 'block';
                addTodoForm.style.display = 'none';
                addTodoInput.value = '';
                addTodoArea.value = '';
                addTodoDate.value = '';
                update();
            }
        }

        addTodo.appendChild(addTodoMark);
        addTodo.appendChild(addTodoLabel);
        addTodo.appendChild(addTodoForm);
        addTodoForm.appendChild(addTodoInput);
        addTodoForm.appendChild(addTodoArea);
        addTodoForm.appendChild(addTodoDate);

        return addTodo;
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

        anchor.classList.add('anchor');
        popover.classList.add('popover');
        popoverLabel.classList.add('popover-label');
        popoverSort.classList.add('popover-sort');
        popoverOptions.classList.add('popover-options');
        popoverLabel.innerText = 'Sort by:'
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
        popover.appendChild(popoverOptions);
        popoverSort.appendChild(popoverDate);
        popoverSort.appendChild(popoverCustom);
        popoverOptions.appendChild(popoverDelete);
        popoverOptions.appendChild(popoverSetcolor);

        return anchor;
    }

    const update = () => {
        const container = document.querySelector('#container');
        const appData = app.getContent();

        while (container.firstChild.id !== 'add-list') {
            container.removeChild(container.firstChild);
        }

        appData.forEach(function(item) {
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