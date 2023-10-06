export {getLandingContent, addProject, getProjectNodes, removeProject};

const projects = [];
let currentID = 0;
//const sortOrder = 0;


function Project(title, description) {
    const id = currentID;
    currentID++;
    return {
        id,
        title,
        description
    }
}

function addProject(info) {
    const project = new Project(info.title, info.description)
    projects.push(project);
    return project;
}

function getProjects() {
    return projects;
}

function getLandingContent() {
    const emptyProject = new Project('Blank title', "Blank description");
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
    const index = projects.indexOf(projects.filter(project => project.id == id)[0]);
    console.log(index);
    console.log(projects.filter(project => project.id == id));
    console.log(projects[0]);
    projects.splice(index, 1);
}

function getDiv(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('data-id', project.id);
    
    const titleP = document.createElement('p');
    titleP.textContent = project.title;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = project.description;

    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View Project';
    viewBtn.classList.add('viewBtn')
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove Project';
    removeBtn.classList.add('removeBtn')

    projectDiv.appendChild(titleP);
    projectDiv.appendChild(descriptionP);
    projectDiv.appendChild(viewBtn);
    projectDiv.appendChild(removeBtn);

    return projectDiv
}