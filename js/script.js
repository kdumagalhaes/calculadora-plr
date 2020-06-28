
const calculadora = document.getElementById('calculadora')
const meuSalario = document.getElementById('meu-salario')
const meuBonus = document.getElementById('meu-bonus')
const mesesTrabalhados = document.getElementById('meses-trabalhados')

calculadora.addEventListener('change', (e) => {
    e.preventDefault()
    let valorSalario = meuSalario.value
    let valorBonus = meuBonus.value
    let quantMeses = mesesTrabalhados.value
    let parcelaBonus = (valorSalario * valorBonus) / 12 
    let meuPLR = parcelaBonus * quantMeses
    const resultPLR = document.getElementById('meu-plr')
    resultPLR.innerHTML = `
    <p>Meu PLR</p>
    <p id="resultado">R$${meuPLR.toFixed(2)}</p>
    `
})