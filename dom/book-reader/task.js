const book = document.getElementById("book");
const fontSize = [...document.getElementsByClassName("font-size")];

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", (e) => {
        e.preventDefault();
        fontSize.forEach((x) => {
            if (x.classList.contains("font-size_active")) {
                x.classList.toggle("font-size_active");
            }
        });
        fontSize[i].classList.toggle("font-size_active");
        if (fontSize[i].dataset.size === "small") {
            book.className = "book book_fs-small";
        } else if (fontSize[i].dataset.size === "big") {
            book.className = "book book_fs-big";
        } else {
            book.className = "book";
        }
    });
}