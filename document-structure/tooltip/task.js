const has_tooltip = Array.from(document.getElementsByClassName("has-tooltip"));
has_tooltip.forEach(element => element.addEventListener("click", hasTooltipClick));

function hasTooltipClick(event) {
    event.preventDefault();

    const hinttext = document.querySelector(".tooltip");
    if (hinttext) {

        if (hinttext === event.target.nextElementSibling) {
            hinttext.remove();
            return;
        } else {
            hinttext.remove();
        }
    }

    const titleTooltip = this.title;
    const elementRect = this.getBoundingClientRect();
    const leftTooltip = elementRect.left;
    const topTooltip = elementRect.top + elementRect.height;
    this.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${leftTooltip}px; top: ${topTooltip}px">${titleTooltip}</div>`);
}