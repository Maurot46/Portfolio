const navbarStars = document.querySelector('.navbar-stars');

for (let i = 0; i < 1000; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    navbarStars.appendChild(star);

    const animationDuration = Math.random() * 5 + 3; // Random duration between 3 and 8 seconds
    const animationDelay = Math.random() * 2; // Random delay between 0 and 2 seconds

    star.style.animation = `glowing ${animationDuration}s ease-in-out ${animationDelay}s infinite`;
}

function handleScrollAnimations() {
    const scrollSections = document.querySelectorAll('.scroll-section');

    scrollSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerOffset = window.innerHeight * 0.3;

        if (sectionTop < triggerOffset) {
            section.classList.add('appear');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations();




