// While - Enquanto
// Estrutura de repetição

// let contador = 0

// while (contador <= 1000){
//     console.log('Segundo ano é top' + ' ' + contador)
//     contador++
// }

let contador = 1
let texto = ''
let textoBox = document.getElementById('texto')

while (contador <= 5) {
    texto += contador + '<br>'
    contador++

    textoBox.innerHTML = texto
}