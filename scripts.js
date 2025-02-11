document.addEventListener("DOMContentLoaded", function () {
    const aviso = document.getElementById("aviso");
    const closeAdvice = document.getElementById("cerrar-aviso");
    const carta = document.getElementById("carta");

    // Mostrar la carta y ocultar el aviso al hacer clic en el botón de cerrar
    closeAdvice.addEventListener("click", function () {
        aviso.style.display = "none";
        carta.style.display = "block";
        // Desencriptar y mostrar el contenido de la carta
        desencriptarArchivo('sources/data.md'); // Aquí se menciona la ruta del archivo
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

function leerArchivo(ruta) {
    return fetch(ruta)
        .then(response => response.text())
        .then(data => data.split('\n'))
        .catch(error => {
            console.error("Error leyendo el archivo:", error);
            return [];
        });
}

function convertBinaryToASCII(binaryText) {
    let asciiText = "";
    let binValues = binaryText.split(" ");
    for (let binValue of binValues) {
        let asciiCode = parseInt(binValue, 2);  // Convertir de binario a entero
        asciiText += asciiCode + " ";
    }
    return asciiText.trim();
}

function convertASCIIToText(asciiText) {
    let text = "";
    let asciiValues = asciiText.split(" ");
    for (let value of asciiValues) {
        let char = String.fromCharCode(parseInt(value));  // Convertir de entero a carácter
        text += char;
    }
    return text;
}

async function desencriptarArchivo(ruta) {
    let lineas = await leerArchivo(ruta);

    // Desencriptar cada línea por separado
    let lineasDesencriptadas = [];
    for (let linea of lineas) {
        let asciiText = convertBinaryToASCII(linea.trim());
        let text = convertASCIIToText(asciiText);
        lineasDesencriptadas.push(text + "\n");
    }

    // Mostrar el resultado en la carta
    const carta = document.getElementById("carta");
    const decryptedText = lineasDesencriptadas.join('');
    carta.innerHTML = decryptedText.replace(/\n/g, '<br>');  // Reemplazar saltos de línea con etiquetas <br>
}
