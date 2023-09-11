//Calculadora

function Calculadora() {
  const operacao = Number(
    prompt(
      'Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'
    )
  )

  if (!operacao || operacao >= 7) {
    alert('Operacão inválida')
    Calculadora()
  } else {
    let n1 = Number(prompt('Insira o primeiro número: '))
    let n2 = Number(prompt('Insira o segundo número: '))
    let resultado

    if (!n1 || n2) {
      alert('Digito inválido')
      Calculadora()
    } else {
      function soma(a, b) {
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao()
      }

      function subtracao(a, b) {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao()
      }

      function multiplicacao(a, b) {
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao()
      }

      function divisaoReal(a, b) {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao()
      }

      function divisaoInteira(a, b) {
        resultado = n1 % n2
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao()
      }

      function potenciacao(a, b) {
        resultado = n1 ** n2
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperacao()
      }

      function novaOperacao() {
        let opcao = Number(
          prompt('Deseja fazer outra operação\n 1 - Sim\n 2 - Não')
        )

        if (opcao == 1) {
          Calculadora()
        } else if (opcao == 2) {
          alert('Até mais!')
        } else {
          alert('Digite uma opção válida')
          novaOperacao()
        }
      }

      if (operacao == 1) {
        soma(n1, n2)
      } else if (operacao == 2) {
        subtracao(n1, n2)
      } else if (operacao == 3) {
        multiplicacao(n1, n2)
      } else if (operacao == 4) {
        divisaoReal(n1, n2)
      } else if (operacao == 5) {
        divisaoInteira(n1, n2)
      } else if (operacao == 6) {
        potenciacao(n1, n2)
      } else {
        console.log('Erro!')
      }
    }
  }
}

Calculadora()
