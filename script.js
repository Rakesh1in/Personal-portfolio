// Typed Text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['Full Stack Developer', 'Insurance Professional', 'Solution Analy'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});






    document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector(".about");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutSection);
    });





