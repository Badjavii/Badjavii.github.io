function leerArchivo(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

function fromBinaryToUnicode(binaryText) {
    return binaryText.split(' ')
        .map(binaryGroup => binaryGroup.split('-')
            .map(binaryDigit => String.fromCharCode(parseInt(binaryDigit, 2)))
            .join('')
        ).join(' ');
}

function fromUnicodeToAscii(unicodeText) {
    return unicodeText.split(' ')
        .map(unicodeGroup => unicodeGroup.split('-')
            .map(unicodeDigit => String.fromCharCode(parseInt(unicodeDigit.slice(1), 10)))
            .join('')
        ).join('');
}

function toNormalText(asciiText) {
    return asciiText.split(' ')
        .map(asciiCode => String.fromCharCode(parseInt(asciiCode)))
        .join('');
}

function revertLines(text) {
    return text.split('\n')
        .map(line => line.split('').reverse().join(''))
        .reverse()
        .join('\n');
}

function desencriptarTexto(text) {
    const binaryText = text.split('\n').map(line => fromBinaryToUnicode(line)).join('\n');
    const unicodeText = binaryText.split('\n').map(line => fromUnicodeToAscii(line)).join('\n');
    const asciiText = unicodeText.split('\n').map(line => toNormalText(line)).join('\n');
    const normalText = asciiText.split('\n').map(line => line.split('').reverse().join('')).join('\n');
    return revertLines(normalText);
}

async function desencriptarArchivo() {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');
    const file = fileInput.files[0];

    if (file) {
        try {
            const encryptedText = await leerArchivo(file);
            const decryptedText = desencriptarTexto(encryptedText);
            output.textContent = decryptedText;
        } catch (error) {
            output.textContent = 'Error al leer el archivo.';
            console.error(error);
        }
    } else {
        output.textContent = 'Por favor, selecciona un archivo.';
    }
}

document.getElementById('fileInput').addEventListener('change', desencriptarArchivo);
