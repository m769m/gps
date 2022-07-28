let Uncover = document.querySelector('.uncover-button');
Uncover.addEventListener('click', function (e) {
    e.preventDefault();

    let uncoverId = Uncover.dataset.uncoverButton;

    let block = document.querySelector(`.uncover-block[data-uncover-block="${uncoverId}"]`);
    let childBlock = block.firstElementChild;

    let textUncover = Uncover.querySelector('.uncover-button__text');
    let iconUncover = Uncover.querySelector('.uncover-button__icon');

    let open = document.querySelector('.uncover-button.uncover-button--open');
    let close = document.querySelector('.uncover-button.uncover-button--close');

    if (open && block.offsetHeight < childBlock.offsetHeight) {
        block.classList.add('uncover-block--open');

        textUncover.innerHTML = 'Скрыть';
        iconUncover.classList.add('uncover-button__icon--rotate');

        Uncover.classList.add('uncover-button--close');
        Uncover.classList.remove('uncover-button--open');

    } else if (close) {
        block.classList.remove('uncover-block--open');

        textUncover.innerHTML = 'Показать все';
        iconUncover.classList.remove('uncover-button__icon--rotate');

        Uncover.classList.add('uncover-button--open');
        Uncover.classList.remove('uncover-button--close');
    }
});