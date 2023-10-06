import './style.css';
import {getLandingContent, addProject, getProjectNodes} from './allProjects.js';


window.onload = () => {
    document.querySelector('#content').appendChild(getAddProjectButton());
    const projectsContainer = document.createElement('div');
    
    projectsContainer.classList.add('projects-container');
    document.querySelector('#content').appendChild(projectsContainer)

    const landingContent = getLandingContent()
    displayProjects();
}

function displayProjects() {
    document.querySelector('.projects-container').innerHTML = '';
    const projectNodes = getProjectNodes();
    // console.log(projectNodes[0]);
    projectNodes.forEach(node => {
        document.querySelector('.projects-container').appendChild(node);
    });
    // document.querySelector('div').addEventListener('click', () => alert('project clicked'));
    // const projects = document.querySelectorAll('.projects-container>div');

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
        // console.log(project);
    })
    return button;
}
