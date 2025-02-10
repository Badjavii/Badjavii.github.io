document.addEventListener("DOMContentLoaded", function () {
    const aviso = document.getElementById("aviso");
    const closeAdvice = document.getElementById("cerrar-aviso");
    const carta = document.getElementById("carta");

    // Mostrar la carta y ocultar el aviso al hacer clic en el botón de cerrar
    closeAdvice.addEventListener("click", function () {
        aviso.style.display = "none";
        carta.style.display = "block";
        // Desencriptar y mostrar el contenido de la carta
        ejecutarScriptPython();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audioElement = document.getElementById("test-audio");
    const muteButton = document.getElementById("mute-button");
    let isPaused = false;

    muteButton.addEventListener("click", function () {
        if (isPaused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
        isPaused = !isPaused;
    });
});

async function ejecutarScriptPython() {
    try {
        const { exec } = require('child_process');
        exec('python_desencriptar.py', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al ejecutar el script: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error en el script: ${stderr}`);
                return;
            }
            const carta = document.getElementById("carta");
            const decryptedText = stdout;
            carta.innerHTML = decryptedText.replace(/\n/g, '<br>'); // Reemplazar saltos de línea con etiquetas <br>
        });
    } catch (error) {
        console.error("Error al ejecutar el script de Python:", error);
    }
}
