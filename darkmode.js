/* =========================
   LURELLE DARK MODE
========================= */


/* =========================
   CREATE DARK MODE BUTTON
========================= */

function createDarkModeButton() {

    const button =
        document.createElement("button");


    button.id =
        "darkModeToggle";


    button.type =
        "button";


    button.setAttribute(
        "aria-label",
        "Toggle dark mode"
    );


    document.body.appendChild(
        button
    );


    updateDarkModeButton();


    button.addEventListener(
        "click",
        function() {

            toggleDarkMode();

        }
    );

}


/* =========================
   TOGGLE DARK MODE
========================= */

function toggleDarkMode() {

    const isDark =
        document.body.classList.toggle(
            "dark-mode"
        );


    localStorage.setItem(
        "lurelle_dark_mode",
        isDark ? "dark" : "light"
    );


    updateDarkModeButton();

}


/* =========================
   UPDATE BUTTON
========================= */

function updateDarkModeButton() {

    const button =
        document.getElementById(
            "darkModeToggle"
        );


    if (!button) {
        return;
    }


    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );


    if (isDark) {

        button.textContent =
            "☀️";

        button.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        button.setAttribute(
            "title",
            "Light mode"
        );

    }

    else {

        button.textContent =
            "🌙";

        button.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        button.setAttribute(
            "title",
            "Dark mode"
        );

    }

}


/* =========================
   LOAD SAVED MODE
========================= */

function loadDarkMode() {

    const savedMode =
        localStorage.getItem(
            "lurelle_dark_mode"
        );


    if (savedMode === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    }

}


/* =========================
   START
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadDarkMode();

        createDarkModeButton();

    }
);
