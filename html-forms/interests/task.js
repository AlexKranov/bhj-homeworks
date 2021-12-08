const interestsGroup = document.querySelectorAll(".interests");

for (let interests of interestsGroup) {
    const close = interests.closest(".interest");
    if (close) {
        const checkBox = close.querySelector(".interest__check");
        checkBox.onclick = () => {
            if (checkBox.checked) {
                tab(close, true);
            } else {
                tab(close, false);
            };
        }
    }
};

function tab(element, checked) {
    let items = element.querySelectorAll(".interest__check");
    for (let item of items) {
        item.checked = checked;
    };
}