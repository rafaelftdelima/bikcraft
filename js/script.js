const links = document.querySelectorAll('.header-menu a');

function activeLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("active");
    }
};

links.forEach(activeLink);

const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
    const element = document.getElementById(parameter);

    if (element) {
        element.checked = true;
    }
};

parameters.forEach(activeProduct);

function activeQuestion(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute("aria-controls");
    const answer = document.getElementById(controls);

    answer.classList.toggle("active");

    const active = answer.classList.contains("active");
    question.setAttribute("aria-expanded", active);
}

function questionClickEvent(button) {
    button.addEventListener("click", activeQuestion);
}

const buttons = document.querySelectorAll(".questions button");
buttons.forEach(questionClickEvent);

const galery = document.querySelectorAll(".bike-images img");
const galeryContainer = document.querySelector(".bike-images");

function changeImage(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;

    if (media) {
        galeryContainer.prepend(img);
    }
}

function galeryEvent(img) {
    img.addEventListener("click", changeImage);
}

galery.forEach(galeryEvent);
