import './style.css';
import {getLandingContent, addProject, getProjectNodes, removeProject, getProjectByID} from './allProjects.js';
import {getSingleProjectDiv} from './project.js';

window.onload = () => {
    document.querySelector('#content').appendChild(getAddProjectButton());
    
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    document.querySelector('#content').appendChild(projectsContainer)

    const landingContent = getLandingContent()
    displayProjects();
}

function displayProjects() {
    clearContent();
    const projectNodes = getProjectNodes();
    projectNodes.forEach(node => {
        document.querySelector('.projects-container').appendChild(node);
        node.querySelector('.removeBtn').addEventListener('click', () => {
            removeProject(node.getAttribute('data-id'));
            displayProjects();
        });
        node.querySelector('.viewBtn').addEventListener('click', () => {
            document.querySelector('#add-project-button').style.display = 'none';
            // console.log(document.querySelector('#add-project-button'));
            clearContent();
            const projectDiv = getSingleProjectDiv(getProjectByID(node.getAttribute('data-id')));
            document.querySelector('#content').appendChild(projectDiv);
        });
    });
}

function clearContent() {
    document.querySelector('.projects-container').innerHTML = '';
}

function getAddProjectButton() {
    const button = document.createElement('button');
    button.id = 'add-project-button';
    button.textContent = 'Add new project';
    button.addEventListener('click', () => {
        const info = {};
        info.title = window.prompt("Title?");
        info.description = window.prompt("Description?");
        const project = addProject(info);
        displayProjects();
    })
    return button;
}
