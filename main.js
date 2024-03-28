let accordionSwitch = document.querySelectorAll('.accordion-block');

accordionSwitch.forEach((accFunct) => {

    accFunct.onclick = () => {

        accordionSwitch.forEach((subclose) => {
            subclose.classList.remove("active");
        });

        accFunct.classList.add("active")

    };

});