document.addEventListener("click", e => {
    let currentAccordion = e.target.closest(".accordions");
    let dropdowns = document.querySelectorAll(".accordion-dropdowns");
    let arrowsDown = document.querySelectorAll(".arrows-down");
    let accordionBtns = document.querySelectorAll(".accordion-btns");
    
    if (currentAccordion) {
        let currentDropdown = currentAccordion.lastElementChild;
        let currentArrowDown = currentAccordion.children[0].lastElementChild;
        let currentBtn = currentAccordion.children[0];

        for (i = 0; i < dropdowns.length; i++) {
            if (currentDropdown == dropdowns[i]) {
                currentArrowDown.classList.toggle("rotate");
                currentDropdown.classList.toggle("active");
                currentBtn.classList.toggle("active");
            }
            else {
                dropdowns[i].classList.remove("active");
                accordionBtns[i].classList.remove("active");
                arrowsDown[i].classList.remove("rotate");
            }
        }
    }
})