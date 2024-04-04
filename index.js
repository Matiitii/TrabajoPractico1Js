function calcular() {
    let N1 = parseFloat(document.querySelector('#Num1').value)

    let N2 = parseFloat(document.querySelector('#Num2').value)

    let r = N1 + N2
    
    Resultado1.innerHTML = r
}

function calcular2() {
    let N1 = parseFloat(document.querySelector('#Num1').value)

    let N2 = parseFloat(document.querySelector('#Num2').value)

    let r = N1 - N2
    
    Resultado1.innerHTML = r
}

function calcular3() {
    let N1 = parseFloat(document.querySelector('#Num1').value)

    let N2 = parseFloat(document.querySelector('#Num2').value)

    let r = N1 * N2
    
    Resultado1.innerHTML = r
}

function calcular4() {
    let N1 = parseFloat(document.querySelector('#Num1').value)

    let N2 = parseFloat(document.querySelector('#Num2').value)

    let r = N1 / N2
    
    Resultado1.innerHTML = r
}

let texto = "Tu edad es "
function edad() {
    let N1 = parseFloat(document.querySelector('#NumAC').value)

    let N2 = parseFloat(document.querySelector('#NumAN').value)

    let r = N1 - N2
    
    Resultado2.innerHTML = '¡'+ texto + r+ '!'
}

function bienvenida() {
    let NombreAlumno= (document.querySelector('#Nombre').value + ' ')
    let ApellidoAlumno= (document.querySelector('#Apellido').value)
     let NombreYApellido = NombreAlumno + ApellidoAlumno
     let texto1 = 'Bienvenid@ '+ NombreYApellido
     Resultado3.innerHTML = '¡' +texto1+ '!'
}


