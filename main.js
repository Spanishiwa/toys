window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const tasks_list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        if (!task) {
            alert("Please input the task");
            return;
        } else {
            const task_el = create_task_list_el(task);
    
            tasks_list_el.appendChild(task_el);
            input.value = '';
        }
    });
});

function create_task_list_el(task) {
    const task_el = document.createElement('div');
    const task_content_el = document.createElement('div');
    const task_input_el = document.createElement('input');
    const task_actions_el = document.createElement('div');

    task_el.classList.add('task');
    task_content_el.classList.add('content');
    task_actions_el.classList.add('actions');

    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.setAttribute('readonly', 'readonly');
    task_input_el.value = task;

    task_actions_el.appendChild(create_task_btn_el('edit'));
    task_actions_el.appendChild(create_task_btn_el('delete'));
    task_content_el.appendChild(task_input_el);
    task_el.appendChild(task_content_el);
    task_el.appendChild(task_actions_el);
    create_task_btn_events(task_el);

    return task_el;
};

function create_task_btn_el(text) {
    const task_btn_el = document.createElement('button');
    const task_icon_el = document.createElement('span');
    const task_text_el = document.createElement('span');
    const task_text_container = document.createElement('div');

    task_btn_el.classList.add(text);
    task_icon_el.classList.add('material-icons');
    task_icon_el.innerHTML = text;

    task_text_el.innerHTML = text;
    task_text_container.appendChild(task_icon_el);
    task_text_container.appendChild(task_text_el);
    task_btn_el.appendChild(task_text_container);

    return task_btn_el;
};

function create_task_btn_events(task_el) {
    const task_edit_btn = task_el.querySelector('.actions button.edit');
    const task_edit_icon_el = task_el.querySelector('.actions button.edit .material-icons');
    const task_edit_text = task_el.querySelector('.actions button.edit div').lastChild;
    const task_del_btn = task_el.querySelector('.actions button.delete');
    const task_input_el = task_el.querySelector('.content input.text');
    const task_lists_el = document.querySelector('#tasks');

    task_edit_btn.addEventListener('click', () => {
        if (task_edit_text.innerText == 'Edit') {
            task_edit_icon_el.innerText = 'save';
            task_edit_text.innerText = 'save';
            task_input_el.removeAttribute('readonly');
            task_edit_btn.classList.add('save');
        } else {
            task_edit_icon_el.innerText = 'edit';
            task_edit_text.innerText = 'edit';
            task_input_el.setAttribute('readonly', 'readonly');
            task_edit_btn.classList.remove('save');
        }
    });

    task_del_btn.addEventListener('click', () => {
        task_lists_el.removeChild(task_el);
    });
};