document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        section.style.transitionDelay = `${index * 0.3}s`;
        section.style.opacity = 1;
        section.style.transform = 'translateX(0)';
    });
});
