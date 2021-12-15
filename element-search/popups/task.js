const modalMain = 'modal_main';
const modalSuccess = 'modal_success';

showModal(modalMain);
closeModal();

function showModal(idValue) {
    const modal = document.getElementById(idValue);
    modal.className = 'modal modal_active';
}

function closeModal() {
    const modalClose = document.querySelectorAll('.modal__close');

    for (let elem of modalClose) {
        elem.onclick = function() {
            elem.closest('.modal_active').className = 'modal';

            if (elem.closest('.show-success')) {
                showModal(modalSuccess);
            }
        }
    }
}