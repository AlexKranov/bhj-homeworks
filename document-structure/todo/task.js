function todo_list() {
    let inputTask = document.getElementById('task__input');
    let submitTask = document.getElementById('tasks__add');
    let taskList = document.getElementById('tasks__list');
    let btnstask__remove = null;
    submitTask.addEventListener('click', (event) => {
        event.preventDefault();
        if (inputTask.value != '') {
            let task = document.createElement('div');
            let textinput = inputTask.value.trim();
            task.classList.add('task');
            task.innerHTML = `
        <div class="task__title">
          ${textinput}
        </div>
        <a href="#" class="task__remove">&times;</a>
      `
            taskList.appendChild(task);
            inputTask.value = '';
            btnstask__remove = document.querySelectorAll('.task__remove');
            for (const btntask__remove of btnstask__remove) {
                btntask__remove.addEventListener('click', deleteTask);
            };
        }
    });

    function deleteTask(event) {
        event.preventDefault();
        event.target.closest('.task').remove();
    }
};

document.addEventListener('DOMContentLoaded', todo_list);