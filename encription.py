def voltear_lineas(lineas):
    """Voltea cada línea individualmente y revierte el orden de las líneas."""
    lineas_volteadas = [linea.strip()[::-1] for linea in reversed(lineas)]
    return lineas_volteadas

def invertir_lineas(lineas):
    """Invierte cada línea carácter por carácter."""
    lineas_invertidas = [linea[::-1] for linea in lineas]
    return lineas_invertidas

def convertir_a_ascii(lineas):
    """Convierte cada carácter de cada línea a su valor ASCII."""
    lineas_ascii = []
    for linea in lineas:
        ascii_linea = [str(ord(caracter)) for caracter in linea]
        lineas_ascii.append(" ".join(ascii_linea))
    return lineas_ascii

def convertir_a_unicode(lineas_ascii):
    """Convierte cada dígito ASCII a su representación Unicode con guiones."""
    lineas_unicode = []
    for linea in lineas_ascii:
        unicode_linea = " ".join(["-".join([f"003{digito}" for digito in str(ascii_char)]) for ascii_char in linea.split()])
        lineas_unicode.append(unicode_linea)
    return lineas_unicode

def convertir_a_binario(lineas_unicode):
    """Convierte cada carácter Unicode a su representación binaria con guiones."""
    lineas_binario = []
    for linea in lineas_unicode:
        binario_linea = " ".join(["-".join([format(int(digito, 16), '04b') for digito in unicode_char.split("-")]) for unicode_char in linea.split()])
        lineas_binario.append(binario_linea)
    return lineas_binario

def guardar_resultado(lineas_binario, archivo_salida):
    """Guarda el resultado encriptado en un archivo."""
    with open(archivo_salida, "w", encoding="utf-8") as f:
        for linea in lineas_binario:
            f.write(linea + "\n")

def encriptar_mensaje(archivo_entrada, archivo_salida):
    """Función principal que realiza todo el proceso de encriptación."""
    # Leer el archivo de entrada
    with open(archivo_entrada, "r", encoding="utf-8") as f:
        lineas = f.readlines()

    # Aplicar el proceso de encriptación
    lineas_volteadas = voltear_lineas(lineas)
    lineas_invertidas = invertir_lineas(lineas_volteadas)
    lineas_ascii = convertir_a_ascii(lineas_invertidas)
    lineas_unicode = convertir_a_unicode(lineas_ascii)
    lineas_binario = convertir_a_binario(lineas_unicode)

    # Guardar el resultado en el archivo de salida
    guardar_resultado(lineas_binario, archivo_salida)

# Ejemplo de uso
archivo_entrada = r"C:\Users\javie\OneDrive\Documentos\GitHub\Badjavii.github.io\sources\14feb.md"  # Archivo de entrada con el mensaje
archivo_salida = "mensaje_encriptado.md"  # Archivo de salida con el resultado encriptado

encriptar_mensaje(archivo_entrada, archivo_salida)
print(f"El mensaje ha sido encriptado y guardado en '{archivo_salida}'.")
