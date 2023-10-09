export {getLandingContent, addProject, getProjectNodes,
        removeProject, getProjectByID, addTodo, removeTodo,
        moveTodoUp, moveTodoDown, sortProjectsByPriority, sortProjectsByDate,
        getSortOrder};

import {compareAsc, compareDesc, isEqual} from 'date-fns';

const projects = [];
let currentID = 0;
const sortOrder = 1;


function Project(title, dueDate, description, priority, notes) {
    const id = currentID;
    currentID++;
    let dueDateSplit = dueDate.split('/');
    let formattedDueDate = new Date(dueDateSplit[2], dueDateSplit[1]-1,dueDateSplit[0]);
    return {
        id,
        title,
        dueDate: formattedDueDate,
        description,
        priority,
        notes,
        todos: [{'Todo 1': false}, {'Todo 2': false}, {'Todo 3': false}]
    }
}

function addProject(info) {
    const project = new Project(info.title, info.dueDate, info.description, info.priority, info.notes);
    projects.push(project);
    return project;
}

function addTodo(id, todo) {
    getProjectByID(id).todos.push({[todo]:false});
}

function removeTodo(id, todoToRemove) {
    const project = getProjectByID(id);
    project.todos = project.todos.filter(todo => {
        return Object.keys(todo)[0] != todoToRemove;
    })
}

function moveTodoUp(id, index) {
    const project = getProjectByID(id);
    const todo = project.todos[index];
    if (index != 0) {
        project.todos.splice(index, 1);
        project.todos.splice(index - 1, 0, todo);
    }
}

function moveTodoDown(id, index) {
    const project = getProjectByID(id);
    const todo = project.todos[index];
    if (index != project.todos.length - 1) {
        project.todos.splice(index, 1);
        project.todos.splice(index + 1, 0, todo);
    }
}

function getLandingContent() {
    const emptyProject = new Project('Blank project', "12/31/2023", 'Blank description', 0, '');
    /////////////////////////////
    /////////////////////////////
    /////////////////////////////
    const emptyProject3 = new Project('Blank project 3', "31/12/2023", 'Blank description', 2, '');
    const emptyProject4 = new Project('Blank project 4', "31/12/2023", 'Blank description', 3, '');
    const emptyProject2 = new Project('Blank project 2', "29/12/2023", 'Blank description', 3, '');
    const emptyProject5 = new Project('Blank project 5', "29/12/2023", 'Blank description', 2, '');
    const emptyProject1 = new Project('Blank project 1', "27/12/2023", 'Blank description', 2, '');
    /////////////////////////////
    /////////////////////////////
    /////////////////////////////
    projects.push(emptyProject);
    projects.push(emptyProject3);
    projects.push(emptyProject4);
    projects.push(emptyProject2);
    projects.push(emptyProject5);
    projects.push(emptyProject1);
    return getDiv(emptyProject);
}

function getProjectNodes() {
    const nodes = [];
    projects.forEach(project => {
        nodes.push(getDiv(project));
    });
    return nodes;
}

function removeProject(id) {
    const index = projects.indexOf(getProjectByID(id));
    projects.splice(index, 1);
}

function getProjectByID(id) {
    return projects.filter(project => project.id == id)[0];
}

function getDiv(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('data-id', project.id);
    
    const titleP = document.createElement('p');
    titleP.textContent = project.title;

    const dueDateP = document.createElement('p');
    dueDateP.textContent = project.dueDate;

    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View Project';
    viewBtn.classList.add('viewBtn')
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove Project';
    removeBtn.classList.add('removeBtn')

    projectDiv.appendChild(titleP);
    projectDiv.appendChild(dueDateP);
    projectDiv.appendChild(viewBtn);
    projectDiv.appendChild(removeBtn);

    return projectDiv
}

function getSortOrder() {
    return sortOrder;
}

function sortProjectsByPriority() {
    projects.sort((project1, project2) => {
        if (project1.priority != project2.priority) {
            return project1.priority - project2.priority;
        } else {
            return compareAsc(project1.dueDate, project2.dueDate);
        }
    })
}

function sortProjectsByDate() {
    projects.sort((project1, project2) => {
        if (!isEqual(project1.dueDate, project2.dueDate)) {
            return compareAsc(project1.dueDate, project2.dueDate);
        } else {
            return project1.priority - project2.priority;
        }
    })
}