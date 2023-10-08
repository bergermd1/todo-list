export {getLandingContent, addProject, getProjectNodes, removeProject, getProjectByID, addTodo, removeTodo, moveTodoUp, moveTodoDown};

const projects = [];
let currentID = 0;
//const sortOrder = 0;


function Project(title, dueDate, description, priority, notes) {
    const id = currentID;
    currentID++;
    return {
        id,
        title,
        dueDate,
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
    projects.push(emptyProject);
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