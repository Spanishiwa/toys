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
        }

        const task_el = create_task_list_el(task);

        tasks_list_el.appendChild(task_el);

    })
});

function create_task_list_el(task) {
    const task_el = document.createElement('div');
    const task_content_el = document.createElement('div');
    const task_input_el = document.createElement('input');
    const task_actions_el = document.createElement('div');
    // const task_edit_el = create_task_btn('edit');
    // const task_delete_el = create_task_btn('delete');

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

    return task_el;
}

// function create_task_actions_el() {
//     const task_actions_div = document.createElement('div');
//     const task_edit_el = document.createElement('button');
//     const task_del_el = document.createElement('button');
// }

// function create_task_edit_el() {
//     const task_edit_btn_el = document.createElement('button');
//     const task_edit_icon_el = document.createElement('span');
//     const task_edit_text_el = document.createElement('span');
//     const task_edit_text_container = document.createElement('div');

//     task_edit_btn_el.classList.add('edit');
//     task_edit_icon_el.classList.add('material-icons');
//     task_edit_icon_el.innerHTML = 'edit';

//     task_edit_text_el.innerHTML = 'edit';
//     task_edit_text_container.appendChild(task_edit_text_el);
//     task_edit_text_container.appendChild(task_edit_icon_el);
//     task_edit_btn_el.appendChild(task_edit_text_container);

//     return task_edit_text_container;
// }

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
}