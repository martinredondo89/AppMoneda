//Vector con todos los buttons
const buttons = document.querySelectorAll("button");
let display = document.querySelector("h6")
const conversor = (monedaExtrajera) => {
    let pesos = document.querySelector("input");
    pesos= parseFloat(pesos.value);
    return pesos / parseFloat(monedaExtrajera);
}






//Con un for each recorremos los botones
//seleccionados por querySelectorAll
buttons.forEach(button => {

    //En cada button agregamos un evento
    button.addEventListener("click", () => {
        //button id identificamos que boton se presiono
        switch (button.id) {
            case "dolar":
                const cantidadDolar = conversor(button.value);
                display.innerText = cantidadDolar.toFixed(2);
                break;
            case "euro":
                const cantidadEuro = conversor(button.value);
                display.innerText = cantidadEuro.toFixed(2);
                break;
            case "real":
                const cantidadReal = conversor(button.value);
                display.innerText = cantidadReal.toFixed(2);
                break;
            case "peso-mex":
                const cantidadPesoMexicano = conversor(button.value);
                display.innerText = cantidadPesoMexicano.toFixed(2);
                break;
            default:
                break;
        }

    });
});