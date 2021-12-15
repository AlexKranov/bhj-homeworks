function tooltip() {
    const links = document.querySelectorAll('.has-tooltip');
    for (const link of links) {
        link.addEventListener('click', tooltip);
    };

    function tooltip(event) {
        event.preventDefault();
        const link = event.target;
        if (link.querySelector('.tooltip')) {
            link.querySelector('.tooltip').classList.toggle('tooltip_active');
        } else {
            const tooltip = document.createElement('div');
            tooltip.textContent = link.getAttribute('title');
            tooltip.classList.add('tooltip', 'tooltip_active');
            link.insertAdjacentElement('beforeEnd', tooltip);
        }
    };
};

document.addEventListener('DOMContentLoaded', tooltip);