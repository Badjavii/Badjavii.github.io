def leer_archivo(ruta):
    """Lee el contenido de un archivo."""
    with open(ruta, 'r', encoding='utf-8') as file:
        return file.read()

def from_binary_to_unicode(binary_text):
    """Convierte texto binario a Unicode con el formato 003X."""
    unicode_text = ' '.join(
        ''.join(f"003{int(binary_digit, 2)}" for binary_digit in binary_group.split('-'))
        for binary_group in binary_text.split(' ')
    )
    print("Binary to Unicode:", unicode_text)
    return unicode_text

def from_unicode_to_ascii(unicode_text):
    """Convierte texto Unicode a ASCII."""
    ascii_text = ''.join(
        chr(int(unicode_digit[2:], 16))  # Convierte "003X" a ASCII
        for unicode_digit in unicode_text.split('-')
    )
    print("Unicode to ASCII:", ascii_text)
    return ascii_text

def to_normal_text(ascii_text):
    """Convierte valores ASCII a texto normal."""
    normal_text = ''.join(chr(int(ascii_code)) for ascii_code in ascii_text.split(' '))
    print("ASCII to Normal Text:", normal_text)
    return normal_text

def revert_lines(text):
    """Revierte el orden de las líneas y las voltea."""
    reverted_text = '\n'.join(line[::-1] for line in text.split('\n')[::-1])
    print("Reverted Lines:", reverted_text)
    return reverted_text

def desencriptar_texto(text):
    """Función principal para desencriptar el texto."""
    # Paso 1: Convertir binario a Unicode
    binary_lines = text.split('\n')
    unicode_lines = [from_binary_to_unicode(line) for line in binary_lines]
    
    # Paso 2: Convertir Unicode a ASCII
    ascii_lines = [from_unicode_to_ascii(line) for line in unicode_lines]
    
    # Paso 3: Convertir ASCII a texto normal
    normal_lines = [to_normal_text(line) for line in ascii_lines]
    
    # Paso 4: Revertir líneas y voltear
    normal_text = '\n'.join(normal_lines)
    return revert_lines(normal_text)

if __name__ == '__main__':
    archivo_encriptado = 'sources/data.txt'
    encrypted_text = leer_archivo(archivo_encriptado)
    print("Encrypted Text:", encrypted_text)
    decrypted_text = desencriptar_texto(encrypted_text)
    print("Decrypted Text:", decrypted_text)
