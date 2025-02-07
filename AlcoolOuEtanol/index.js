const gasolinaInput = document.getElementById('gaso');
const alcoolInput = document.getElementById('alc');
const botao = document.getElementById('btn');


function calculate(gasolina, alcool){

    if (alcool > gasolina * 0.7 ){              // condicional, se alcool for maior que 70% da gasolina então...
        alert('Abasteça com Gasolina!')
    } else if (alcool === gasolina * 0.7 ){     // se forem iguais...
        alert('Os dois estão com o mesmo valor')
    } else (                                    // se alcool for menor que 70% da gasolina então...
        alert('Abasteça com Alcool!')
    )
}

botao.addEventListener('click', function() { // chama função
    const gasolina = Number(gasolinaInput.value);
    const alcool = Number(alcoolInput.value);

    calculate(gasolina, alcool)
});