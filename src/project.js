export {getSingleProjectDiv};

function getSingleProjectDiv(project) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.textContent = `${project.title} ${project.description}`;
    
    
    
    
    return projectContainer;
}