// https://learnjavascript.online/app.html?id=1876

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", event => {
        document.querySelector(".card.active")?.classList.remove("active");
        event.currentTarget.classList.toggle("active");
    });
});
