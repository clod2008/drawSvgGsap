document.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('line');
    const imgBg = document.getElementById('imgBg');
    const length = path.getTotalLength();

    // Establecer el valor inicial para stroke-dasharray y stroke-dashoffset
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = -length;

    // Preload de la imagen de fondo
    function preloadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
        });
    }

    // URL de la imagen de fondo
    const backgroundImageUrl = './imgBg.png'; // Asegúrate de que la ruta sea correcta

    // Iniciar preloader
    preloadImage(backgroundImageUrl)
        .then(() => {
            // Una vez que la imagen está cargada, procedemos con las animaciones

            // Crear una línea de tiempo con GSAP
            const tl = gsap.timeline();

            tl.to(imgBg, { opacity: 0 })
            // Añadir animación de strokeDashoffset al path
            tl.to(path, { duration: 4, strokeDashoffset: 0 });

            // Añadir fade-in del fondo a la línea de tiempo
            tl.to(imgBg, { opacity: 0.001, duration: 1, delay: -3 })
            tl.to(imgBg, { opacity: 1, duration: 2, delay: -1 })

        })
        .catch((error) => {
            console.error('Error al cargar la imagen de fondo:', error);
            // Manejar errores de carga de la imagen aquí, como mostrar un mensaje alternativo o cargar una imagen por defecto
        });
});
