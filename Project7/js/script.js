let navCard = document.querySelector(".nav-card");
let wrapper = document.querySelector(".wrapper");

document.addEventListener("click", e => {

    const isCloseBtn = e.target.matches(".close");
    const isMenuBtn = e.target.matches(".menu-btn");

    if (!isCloseBtn && e.target.closest(".nav-card") != null) return

    if (isMenuBtn) {
        navCard.classList.add("display");
        wrapper.classList.add("blur");
    }

    if (isCloseBtn || !isMenuBtn) {
        navCard.classList.remove("display")
        wrapper.classList.remove("blur");
    }
    // Hello world
    
})