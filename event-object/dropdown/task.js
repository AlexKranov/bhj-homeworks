const dropdownValue = document.querySelector(".dropdown__value");
dropdownValue.addEventListener("click", showDropdown);

const dropdownList = document.querySelector(".dropdown__list");

dropdownList.onclick = function(event) {
    event.preventDefault();
    dropdownValue.textContent = event.target.textContent;
    showDropdown();
}

function showDropdown() {
    if (dropdownList.className.includes("dropdown__list_active")) {
        dropdownList.classList.remove("dropdown__list_active");
    } else {
        dropdownList.classList.add("dropdown__list_active")
    }
}