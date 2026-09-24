/**
 * utileria.js - Librería de validación y utilidades sin dependencias.
 */

// --- FUNCIONES OBLIGATORIAS ---

// 1. Valida el formato de un correo electrónico
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// 2. Valida que el texto solo contenga letras (incluye acentos y la ñ) y espacios
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto) && texto.trim().length > 0;
}

// 3. Valida que un valor sea numérico y no exceda una longitud máxima
function validarLongitud(numero, maxLongitud) {
    const numStr = numero.toString().trim();
    const esNumero = /^\d+$/.test(numStr);
    return esNumero && numStr.length <= maxLongitud;
}

// 4. Calcula la edad a partir de una fecha de nacimiento (formato YYYY-MM-DD)
function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    // Ajuste de zona horaria para evitar desfasamiento de días
    const fechaNacLocal = new Date(fechaNac.getTime() + Math.abs(fechaNac.getTimezoneOffset() * 60000));
    const hoy = new Date();
    
    let edad = hoy.getFullYear() - fechaNacLocal.getFullYear();
    const mes = hoy.getMonth() - fechaNacLocal.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacLocal.getDate())) {
        edad--;
    }
    return edad;
}

// 5. Valida si la persona es mayor de edad (18 años o más)
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

// 6. Valida que la contraseña tenga mayúscula, minúscula, número, carácter especial y min 8 caracteres
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// --- FUNCIONES ADICIONALES ---

// 7. Formatea una cadena de 10 dígitos a un formato de teléfono legible (XXX XXX XX XX)
function formatearTelefonoMX(telefono) {
    const num = telefono.toString().replace(/\D/g, '');
    if (num.length === 10) {
        return num.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    }
    return telefono;
}

// 8. Limpia los espacios extra de un texto (trim y espacios dobles internos)
function limpiarTexto(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}