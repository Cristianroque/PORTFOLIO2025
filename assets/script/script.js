const btnHeader = document.getElementById('btnHeader');
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closeBtn');

document.getElementById('menuIcon').addEventListener('click', function () {
    const ul = document.querySelector('header ul');
    ul.classList.toggle('active');
});

document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', function (event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    btnHeader.addEventListener('click', function () {
        popupOverlay.classList.add('active');
    });

    closeBtn.addEventListener('click', function () {
        popupOverlay.classList.remove('active');
    });

    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.classList.remove('active');
        }
    });
});



