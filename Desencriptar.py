def leer_archivo(ruta):
    """Lee el contenido de un archivo línea por línea."""
    with open(ruta, 'r', encoding='utf-8') as file:
        return file.readlines()

def convert_Binary_to_ASCII(binary_text: str) -> str:
    ascii_text = ""
    bin_values = binary_text.split()
    for bin_value in bin_values:
        ascii_code = int(bin_value, 2)  # Convertir de binario a entero
        ascii_text += str(ascii_code) + " "
    return ascii_text.strip()

def convert_ASCII_to_Text(ascii_text: str) -> str:
    text = ""
    ascii_values = ascii_text.split()
    for value in ascii_values:
        char = chr(int(value))  # Convertir de entero a carácter
        text += char
    return text

def desencriptar_archivo(archivo_entrada):
    """Función principal que realiza todo el proceso de desencriptación respetando los espacios entre párrafos."""
    # Leer el archivo de entrada línea por línea
    lineas = leer_archivo(archivo_entrada)
    
    # Desencriptar cada línea por separado
    lineas_desencriptadas = []
    for linea in lineas:
        ascii_text = convert_Binary_to_ASCII(linea.strip())
        text = convert_ASCII_to_Text(ascii_text)
        lineas_desencriptadas.append(text + "\n")
    
    # Retornar el resultado desencriptado
    return ''.join(lineas_desencriptadas)

if __name__ == "__main__":
    archivo_entrada = "sources/encriptado.txt"  # Archivo de entrada con los datos en binario
    
    desencriptado = desencriptar_archivo(archivo_entrada)
    print(desencriptado)

