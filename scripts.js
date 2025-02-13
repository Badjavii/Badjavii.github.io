document.addEventListener("DOMContentLoaded", function () {
    const aviso = document.getElementById("aviso");
    const closeAdvice = document.getElementById("cerrar-aviso");
    const carta = document.getElementById("carta");

    // Mostrar la carta y ocultar el aviso al hacer clic en el botón de cerrar
    closeAdvice.addEventListener("click", function () {
        aviso.style.display = "none";
        carta.style.display = "block";
        // Desencriptar y mostrar el contenido de la carta
        desencriptarArchivo('sources/data.md');
    });

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

async function leerArchivo(ruta) {
    try {
        const response = await fetch(ruta);
        if (!response.ok) {
            throw new Error("Error al leer el archivo");
        }
        const data = await response.text();
        return data.split('\n');
    } catch (error) {
        console.error("Error leyendo el archivo:", error);
        return [];
    }
}

function convertBinaryToASCII(binaryText) {
    let asciiText = "";
    let binValues = binaryText.split(" ");
    for (let binValue of binValues) {
        if (binValue.trim() === "") continue;  // Ignorar espacios vacíos
        let asciiCode = parseInt(binValue, 2);  // Convertir de binario a entero
        if (isNaN(asciiCode)) {
            console.error("Valor binario inválido:", binValue);
            continue;
        }
        asciiText += asciiCode + " ";
    }
    return asciiText.trim();
}

function convertASCIIToText(asciiText) {
    let text = "";
    let asciiValues = asciiText.split(" ");
    for (let value of asciiValues) {
        if (value.trim() === "") continue;  // Ignorar espacios vacíos
        let char = String.fromCharCode(parseInt(value));  // Convertir de entero a carácter
        text += char;
    }
    return text;
}

async function desencriptarArchivo(ruta) {
    try {
        let lineas = await leerArchivo(ruta);
        if (lineas.length === 0) {
            console.error("El archivo está vacío o no se pudo leer.");
            return;
        }

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
    } catch (error) {
        console.error("Error desencriptando el archivo:", error);
    }
}