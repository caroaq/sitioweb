// Evento para el botón de celebración
document.getElementById('celebrateButton').addEventListener('click', function (e) {
    e.preventDefault(); // Evitar la acción predeterminada del enlace

    // Reproducir sonido de cumpleaños
    const sound = document.getElementById('birthdaySound');
    sound.play();

    // Mostrar y generar el confetti
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block';

    // Crear confetti de colores aleatorios
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 1 + 1}s`;
        confettiContainer.appendChild(confetti);

        // Eliminar el confetti después de que cae
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
});
