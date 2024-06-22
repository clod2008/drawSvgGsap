document.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('line');
    const imgBg = document.getElementById('imgBg');
    const length = path.getTotalLength();

    // Establecer el valor inicial para stroke-dasharray y stroke-dashoffset
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = -length;

    // Crear una línea de tiempo
    const tl = gsap.timeline()

    tl.to(path, { duration: 4, strokeDashoffset: 0 })
    tl.to(imgBg, { duration: 3, opacity: 1 }, "-=2")
});

