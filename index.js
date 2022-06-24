let botao = document.getElementById('btn')
botao.addEventListener('click', () => {
    let inputhora = document.querySelector('#horas')
    let inputQuant = document.querySelector('#quant')
    let resultado = document.getElementById('res')
    let hora = Number(inputhora.value)
    let quantidade = Number(inputQuant.value)
    let salarioBruto = hora * quantidade
    let imposto = (5 / 100) * salarioBruto
    let sindicato = (3 / 100) * salarioBruto
    let fgts = (11 / 100) * salarioBruto
    let desconto = imposto + sindicato
    let salarioLiquido = salarioBruto - desconto

    if(salarioBruto <= 900) {
        resultado.style.textAlign = 'center'
        resultado.style.color = 'black'
        resultado.innerHTML = `<p>Salário bruto: R$${salarioBruto.toFixed(2)} <br>Imposto de renda: Isento <br>Sindicato(3%): R$${sindicato.toFixed(2)} <br>FGTS(11%): R$${fgts.toFixed(2)} <br>Total descontos: R$${sindicato.toFixed(2)} <br>Salário líquido: R$${(salarioBruto - sindicato).toFixed(2)}</p>`
    } else if(salarioBruto > 900 && salarioBruto <= 1500) {
        resultado.style.textAlign = 'center'
        resultado.style.color = 'black'
        resultado.innerHTML = `<p>Salário bruto: R$${salarioBruto.toFixed(2)} <br>Imposto de renda(5%): R$${imposto.toFixed(2)} <br>Sindicato(3%): R$${sindicato.toFixed(2)} <br>FGTS(11%): R$${fgts.toFixed(2)} <br>Total descontos: R$${desconto.toFixed(2)} <br>Salário líquido: R$${salarioLiquido.toFixed(2)}</p>`
    } else if(salarioBruto > 1500 && salarioBruto <= 2500) {
        imposto = (10 / 100) * salarioBruto
        novoDesconto = imposto + sindicato
        novoSalLiquido = salarioBruto - novoDesconto
        resultado.style.textAlign = 'center'
        resultado.style.color = 'black'
        resultado.innerHTML = `<p>Salário bruto: R$${salarioBruto.toFixed(2)} <br>Imposto de renda(10%): R$${imposto.toFixed(2)} <br>Sindicato(3%): R$${sindicato.toFixed(2)} <br>FGTS(11%): R$${fgts.toFixed(2)} <br>Total descontos: R$${novoDesconto.toFixed(2)} <br>Salário líquido: R$${novoSalLiquido.toFixed(2)}</p>`
    } else if(salarioBruto > 2500) {
        imposto = (20 / 100) * salarioBruto
        novoDesconto = imposto + sindicato
        novoSalLiquido = salarioBruto - novoDesconto
        resultado.style.textAlign = 'center'
        resultado.style.color = 'black'
        resultado.innerHTML = `<p>Salário bruto: R$${salarioBruto.toFixed(2)} <br>Imposto de renda(20%): R$${imposto.toFixed(2)} <br>Sindicato(3%): R$${sindicato.toFixed(2)} <br>FGTS(11%): R$${fgts.toFixed(2)} <br>Total descontos: R$${novoDesconto.toFixed(2)} <br>Salário líquido: R$${novoSalLiquido.toFixed(2)}</p>`
    }
})