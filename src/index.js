import './style.css';
import {setLandingContent, addProject, getProjectNodes,
        removeProject, getProjectByID, addTodo, removeTodo,
        moveTodoUp, moveTodoDown, sortProjectsByPriority, sortProjectsByDate,
        getSortOrder,
        flipSortOrder} from './allProjects.js';
import {getSingleProjectDivs} from './project.js';

window.onload = () => {
    document.querySelector('#content').appendChild(getAddProjectButton());
    document.querySelector('#content').appendChild(getSortButton());
    
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    document.querySelector('#content').appendChild(projectsContainer);
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    document.querySelector('#content').appendChild(projectContainer);

    setLandingContent()
    displayProjects();
}

function displayProjects() {
    clearContent();
    console.log(getSortOrder());
    getSortOrder() ? sortProjectsByDate() : sortProjectsByPriority();
    const projectNodes = getProjectNodes();
    projectNodes.forEach(node => {
        document.querySelector('.projects-container').appendChild(node);
        node.querySelector('.removeBtn').addEventListener('click', () => {
            removeProject(node.getAttribute('data-id'));
            displayProjects();
        });
        node.querySelector('.viewBtn').addEventListener('click', () => {
            displaySingleProject(node.getAttribute('data-id'));
        });
    });
}

function displaySingleProject(id) {
    document.querySelector('#add-project-button').style.display = 'none';
    document.querySelector('.project-container').style.display = 'grid';
    clearContent();
    const header = document.createElement('h2');
    header.classList.add('project-header');
    header.textContent = getProjectByID(id).title;
    document.querySelector('.project-container').appendChild(header);
    
    const projectDivs = getSingleProjectDivs(getProjectByID(id));
    projectDivs.forEach(div => {
        document.querySelector('.project-container').appendChild(div);
    });
    const returnButton = document.querySelector('#return-button');
    returnButton.addEventListener('click', () => {
        document.querySelector('#add-project-button').style.display = 'block';
        document.querySelector('.project-container').style.display = 'none';
        displayProjects();
    });
    const addTodoButton = document.querySelector('#add-todo-button');
    addTodoButton.addEventListener('click', () => {
        
        const todo = window.prompt("Enter new todo");
        addTodo(id, todo);
        displaySingleProject(id);
    })
    const removeTodoButton = document.querySelector('#remove-todo-button');
    removeTodoButton.addEventListener('click', () => {
        const checkList = document.querySelector('.check-list');
        for (const inputDiv of checkList.children) {
            if (inputDiv.querySelector('input').checked) {
                const value = inputDiv.querySelector('input').value;
                inputDiv.remove();
                removeTodo(id, value);
            }
        }
    })

    const moveTodoUpButton = document.querySelector('#move-todo-up-button');
    moveTodoUpButton.addEventListener('click', () => {
        const checkList = document.querySelector('.check-list');
        let checkedItemIndex;
        [...checkList.children].forEach((inputDiv, index) => {
            if (inputDiv.querySelector('input').checked) {
                checkedItemIndex = index;
                moveTodoUp(id, index);
                displaySingleProject(id);
            }
        });
        document.querySelector(`.check-list>div:nth-child(${Math.max(checkedItemIndex, 1)})>input`).checked = true;
    })
    
    const moveTodoDownButton = document.querySelector('#move-todo-down-button');
    moveTodoDownButton.addEventListener('click', () => {
        const checkList = document.querySelector('.check-list');
        let checkedItemIndex;
        [...checkList.children].forEach((inputDiv, index) => {
            if (inputDiv.querySelector('input').checked) {
                checkedItemIndex = index;
                moveTodoDown(id, index);
                displaySingleProject(id);
            }
        });
        document.querySelector(`.check-list>div:nth-child(${Math.min(checkedItemIndex + 2, [...checkList.children].length)})>input`).checked = true;
    })
    restrikeItems(id);
}

function restrikeItems(id) {
    let divs = document.querySelectorAll('.check-list>div');
    const project = getProjectByID(id);
    [...divs].forEach((div, index) => {
        if (Object.values(project.todos[index])[0]) {
            divs[index].querySelector('label').classList.add('strike');
        }
    });
}

function clearContent() {
    document.querySelector('.projects-container').innerHTML = '';
    document.querySelector('.project-container').innerHTML = '';
}

function getAddProjectButton() {
    const button = document.createElement('button');
    button.id = 'add-project-button';
    button.textContent = 'Add new project';
    button.addEventListener('click', () => {
        const info = {};
        info.title = window.prompt("Title?");
        info.description = window.prompt("Description?");
        info.dueDate = window.prompt("Due date? (DD/MM/YYYY");
        info.priority = window.prompt("Priority?");
        info.notes = window.prompt("Notes?");
        const project = addProject(info);
        displayProjects();
    })
    return button;
}

function getSortButton() {
    const sortBtn = document.createElement('label');
    sortBtn.classList.add('switch');
    sortBtn.innerHTML = `
        <input type="checkbox">
        <span class="slider round"></span>
    `;
    sortBtn.addEventListener('mousedown', () => {
        flipSortOrder();
        displayProjects();
    })
    return sortBtn;
}

