import './style.css';
import {getLandingContent, addProject, getProjectNodes, removeProject} from './allProjects.js';


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
            clearContent();
            // displaySingleProject(node.getAttribute('data-id'));
        });
    });
}

function clearContent() {
    document.querySelector('.projects-container').innerHTML = '';
}

function getAddProjectButton() {
    const button = document.createElement('button');
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
