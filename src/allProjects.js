export {getLandingContent, addProject, getProjectNodes};

const projects = [];
//const sortOrder = 0;


function Project(title, description) {
    return {
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
    console.log(projects);
    projects.forEach(project => {
        nodes.push(getDiv(project));
    });
    return nodes;
}

function getDiv(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    
    const titleP = document.createElement('p');
    titleP.textContent = project.title;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = project.description;

    projectDiv.appendChild(titleP);
    projectDiv.appendChild(descriptionP);

    return projectDiv
}

function displayProjects() {

}