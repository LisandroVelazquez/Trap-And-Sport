let grafico = document.getElementById("grafico")
const pi = Math.PI
let division = document.getElementById("slider")
let slider = division.getElementsByTagName("input")[0]
let texto = division.getElementsByClassName("valorSli")[0]
document.getElementById("graficar").addEventListener("click", () => graficar())

slider.addEventListener("input", () => {
    texto.textContent = slider.value
    graficar()
}
)

let miGrafico;

let ejeX2 = []

for(let i = 0; i < 2*pi; i = i + 0.01) {
    ejeX2.push(i.toFixed(2))
}

let ejeY2 = ejeX2.map(x => (Math.sin(x)))

miGrafico = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ejeX2,
                datasets: [{
                    label: `f(x) = seno`,
                    data: ejeY2,
                    fill: true,
                    fillColor: 'rgb(161, 13, 13)',
                    borderColor: 'rgb(161, 13, 13)',
                    tension: 0.3
                }]
            }
        })

function graficar() {
    if (miGrafico) {
        miGrafico.destroy()
    }
    
    
    let ejeX = []
    let Maximo = parseFloat(document.getElementById("Maximo").value)
    let Minimo = parseFloat(document.getElementById("Minimo").value)
    let Puntos = parseInt(document.getElementById("Puntos").value)
    let funcionSeleccionada = document.getElementById("funcion").value

    // Define la función según la selección del usuario
    const f = (x) => {
        switch (funcionSeleccionada) {
            case "sin":
                return Math.sin(x + (-2))
            case "cos":
                return Math.cos(x)
        }
    }

    let cant = (Maximo - Minimo) / Puntos

    for (let i = Minimo; i < Maximo; i = i + cant) {
        ejeX.push(i.toFixed(2))
    }

    let ejeY = ejeX.map(x => f(parseFloat(x))*slider.value)

        miGrafico = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ejeX,
                datasets: [{
                    label: `f(x) = ${funcionSeleccionada}(x)`,
                    data: ejeY,
                    fill: true,
                    borderColor: 'rgb(161, 13, 13)',
                    tension: 0.3
                }]
            }
        })
}
