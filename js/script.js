
const calculadora = document.getElementById('calculadora')
const meuSalario = document.getElementById('meu-salario')
const meuBonus = document.getElementById('meu-bonus')
const mesesTrabalhados = document.getElementById('meses-trabalhados')
const btnLimpar = document.getElementById('btn-limpar')
const resultPLR = document.getElementById('meu-plr')

calculadora.addEventListener('submit', (e) => {
    e.preventDefault()
    let valorSalario = meuSalario.value
    let valorBonus = meuBonus.value
    let quantMeses = mesesTrabalhados.value
    let parcelaBonus = (valorSalario * valorBonus) / 12 
    let meuPLR = parcelaBonus * quantMeses
    let plrConvertido = meuPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    resultPLR.innerHTML = `
    <h2>Meu PLR*</h2>
    <p id="resultado">${plrConvertido}</p>
    <small>*Valor bruto.</small>
    `
    calculadora.style.borderBottom = '1px solid var(--verde-sombreado)'


})

btnLimpar.addEventListener('click', () => {
    resultPLR.innerHTML = ''
    calculadora.style.borderBottom = 'none'
})
