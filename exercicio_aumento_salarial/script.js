

function reajusteSalarial() {
    var sal = document.getElementById("salario").value

    var antesReajuste = document.getElementById("antesReajuste")
    var percentualAumento = document.getElementById("percentualAumento")
    var valorAumento = document.getElementById("valorAumento")
    var novoSalario = document.getElementById("novoSalario")

    let valueAumento = ''

    antesReajuste.innerHTML = `R$${sal}`

    if (sal <= 280) {
        percentualAumento.innerHTML = "20%"
        valueAumento = sal*0.2
    } else if (sal>280 && sal<700) {
        percentualAumento.innerHTML = "15%"
        valueAumento = sal*0.15
    } else if (sal>700 && sal <1500) {
        percentualAumento.innerHTML = "10%"
        valueAumento = sal*0.1
    } else {
        percentualAumento.innerHTML = "5%"
        valueAumento = sal*0.05
    }

    novoSalario.innerHTML = `R$${parseFloat(sal)+parseFloat(valueAumento)}`
    valorAumento.innerHTML = `R$${valueAumento}`

}