export {getLandingContent, addProject, getProjectNodes, removeProject, getProjectByID, addTodo};

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
        todos: ['Todo 1', 'Todo 2', 'Todo 3']
    }
}

function addProject(info) {
    const project = new Project(info.title, info.dueDate, info.description, info.priority, info.notes);
    projects.push(project);
    return project;
}

function addTodo(id, todo) {
    getProjectByID(id).todos.push(todo);
}

function getProjects() {
    return projects;
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
    console.log(index);
    console.log(projects.filter(project => project.id == id));
    console.log(projects[0]);
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