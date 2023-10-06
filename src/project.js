export {getSingleProjectDivs};

function getSingleProjectDivs(project) {
    
    const checkListContainer = getCheckListContainerDiv(project);
    const detailsContainer = getDetailsContainerDiv(project);
    const buttonsContainer = getButtonsContainer();

    return [checkListContainer, detailsContainer, buttonsContainer]
}

function getCheckListContainerDiv(project) {
    const checkListContainer = document.createElement('div');
    checkListContainer.classList.add('check-list-container');
    const checkList = document.createElement('fieldset');
    checkList.legend = 'Check list';
    checkList.classList.add('check-list');
    checkListContainer.appendChild(checkList);
    project.todos.forEach(todo => {
        const inputContainer = document.createElement('div');

        const label = document.createElement('label');
        label.textContent = Object.keys(todo)[0];
        label.addEventListener('click', () => {
            if (([...label.classList].includes('strike'))) {
                label.classList.remove('strike');
            } else {
                label.classList.add('strike');
            }
        })
        const input = document.createElement('input');
        input.type = 'radio';
        input.value = Object.keys(todo)[0];;
        input.name = 'todos';

        inputContainer.appendChild(input);
        inputContainer.appendChild(label);

        checkList.appendChild(inputContainer);
    });

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


function getButtonsContainer() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const returnButton = document.createElement('button');
    returnButton.id = 'return-button';
    returnButton.textContent = 'Return to projects page'

    const addTodoButton = document.createElement('button');
    addTodoButton.id = 'add-todo-button';
    addTodoButton.textContent = 'Add todo';

    const removeTodoButton = document.createElement('button');
    removeTodoButton.id = 'remove-todo-button';
    removeTodoButton.textContent = 'Remove todo'

    const moveTodoUpButton = document.createElement('button');
    moveTodoUpButton.id = 'move-todo-up-button';
    moveTodoUpButton.textContent = 'Move up';

    buttonsContainer.appendChild(returnButton);
    buttonsContainer.appendChild(addTodoButton);
    buttonsContainer.appendChild(removeTodoButton);
    buttonsContainer.appendChild(moveTodoUpButton);

    return buttonsContainer;
}