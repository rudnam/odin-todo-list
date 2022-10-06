// UI.js

const DOM = (() => {
    const createTitle = () => {
        const title = document.createElement('div');
        const p = document.createElement('p');
    
        title.appendChild(p);
    
        title.id = 'title';
        p.innerText = "My Tasks";
    
        return title;
    }
    const createContainer = () => {
        const container = document.createElement('div');
    
        container.id = 'container';
        const numOfGroups = 5;
        for (let i=0; i<numOfGroups; i++) {
            const list = document.createElement('div');
            const h = document.createElement('p');
            const ul = document.createElement('ul');
    
            
            const numOfItems = Math.floor(Math.random() * 8) + 1;
            for (let j=0; j<numOfItems; j++) {
                const item = document.createElement('li');
                item.innerText = `Task #${j + 1}`;
                ul.appendChild(item);
            }
    
            h.innerText = "List name";
            h.contentEditable = 'true';
            list.classList.add('list');
            list.appendChild(h);
            list.appendChild(ul);
            container.appendChild(list);
        }
    
        const addList = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = "+ Add new list";
        addList.appendChild(p);
        addList.classList.add('list');
        addList.id = 'add-list';
    
        container.appendChild(addList);
    
        return container;
    }
    return {createTitle,
            createContainer,};
})();

export default function loadUI() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    content.appendChild(DOM.createTitle());
    content.appendChild(DOM.createContainer());
}