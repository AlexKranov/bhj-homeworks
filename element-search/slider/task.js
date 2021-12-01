const images = [...document.querySelectorAll(".slider__item")];
const arrows = document.querySelectorAll(".slider__arrow");
const dots = [...document.querySelectorAll(".slider__dot")];


let itemIndex;

const findItemIndex = () => {
    return images.findIndex((image) =>
        image.classList.contains("slider__item_active")
    );
};

arrows.forEach((arrow) => {
    let itemIndex;

    if (arrow.classList.contains("slider__arrow_prev")) {
        arrow.onclick = () => {
            itemIndex = findItemIndex();

            if (itemIndex > 0) {
                itemIndex--;
            } else {
                itemIndex = images.length - 1;
            }

            showActiveImage(itemIndex);
        };
    } else if (arrow.classList.contains("slider__arrow_next")) {
        arrow.onclick = () => {
            itemIndex = findItemIndex();

            if (itemIndex < images.length - 1) {
                itemIndex++;
            } else {
                itemIndex = 0;
            }

            showActiveImage(itemIndex);
        };
    }
});

dots.forEach((dot) => {
    dot.onclick = () => {
        dot.classList.toggle("slider__dot_active");
        const dotIndex = dots.indexOf(dot);

        showActiveImage(dotIndex);
    };
});

const showActiveImage = (index) => {
    resetImageClass();
    images[index].classList.toggle("slider__item_active");
    dots[index].classList.toggle("slider__dot_active");
};

const resetImageClass = () => {
    images.forEach((image) => {
        image.classList.remove("slider__item_active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("slider__dot_active");
    });
};