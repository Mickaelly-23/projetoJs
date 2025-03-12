function criptografar(texto, N) {
    if (N < 1 || N > 10) {
        throw new Error("O valor de N deve estar entre 1 e 10.");
    }

    function cifraDeCesar(str, deslocamento) {
        return str.split('').map(char => {
            if (char.match(/[a-z]/i)) { 
                let base = char === char.toUpperCase() ? 65 : 97; 
                return String.fromCharCode(((char.charCodeAt(0) - base + deslocamento) % 26) + base);
            }
            return char; 
        }).join('');
    }

    for (let i = 0; i < 3; i++) { 
        texto = cifraDeCesar(texto, N);
    }

    return texto;
}

console.log(criptografar("Hello World!", 3)); 
