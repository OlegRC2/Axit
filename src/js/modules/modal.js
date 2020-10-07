function modal(modalSelector, modalCloseSelector) {

    const modal = document.querySelector(modalSelector);

    modal.classList.add('animated');
    
    modal.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(modalCloseSelector.slice(1))) {
            modal.classList.remove('fadeIn');
            modal.classList.add('fadeOut');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 1000);
        }
    });
}

export default modal; 