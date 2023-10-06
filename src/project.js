export {getSingleProjectDiv};

function getSingleProjectDiv(project) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    
    const checkListContainer = getCheckListContainerDiv(project);
    const detailsContainer = getDetailsContainerDiv(project);
    
    projectContainer.appendChild(checkListContainer)
    projectContainer.appendChild(detailsContainer)
    
    return projectContainer;
}

function getCheckListContainerDiv(project) {
    const checkListContainer = document.createElement('div');
    checkListContainer.classList.add('check-list-container');
    const checkList = document.createElement('ol');
    checkList.textContent = 'Check list';
    checkList.classList.add('check-list');
    checkListContainer.appendChild(checkList);
    project.todos.forEach((todo) => {
        const li = document.createElement('li')
        li.textContent = todo;
        checkList.appendChild(li);
    })

    return checkListContainer;
}

function getDetailsContainerDiv(project) {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    
    const details = document.createElement('ul');
    details.textContent = 'Details';
    details.classList.add('details');
    detailsContainer.appendChild(details);
    
    const liList = getDetails(project);
    liList.forEach(li => {
        details.append(li);
    })
    
    return detailsContainer
}

function getDetails(project) {
    const liList = [];
    const lineItems = {
        description: 'Description',
        dueDate: 'Due date',
        priority: 'Priority',
        notes: 'Notes'
    };

    for (let key in lineItems) {
        const item = document.createElement('li');
        item.textContent = lineItems[key] + ": " + project[key];
        liList.push(item);
    }

    return liList;
}