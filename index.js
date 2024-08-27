function calcularJuros(){ // Função para calcular o valor futuro de um investimento com juros compostos
    var inicial = Number(document.getElementById("inicial").value);// Obtém o valor inicial do investimento a partir do campo de entrada com id "inicial"
    var taxaJuros = Number(document.getElementById("taxaJuros").value);    // Obtém a taxa de juros do campo de entrada com id "taxaJuros"
    var tempo = Number(document.getElementById("tempo").value);// Obtém o tempo total do investimento (em anos) do campo de entrada com id "tempo"
    var result = document.getElementById("resultado");  // Obtém o elemento onde o resultado será exibido (com id "resultado")

    var calcular = inicial * (1 + taxaJuros / 100) ** tempo // Calcula o valor futuro usando a fórmula de juros compostos:
    var resultadoFormatado = calcular.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });// Formata o resultado para o formato de moeda brasileira (R$) com duas casas decimais
    
    // Atualiza o conteúdo HTML do elemento "resultado" para mostrar o valor formatado
  // A string de resultado inclui o texto "O RESULTADO É:" e o valor formatado em reais, com formatação em negrito
  result.innerHTML = `O RESULTADO É: <strong class="resultado">R$ ${resultadoFormatado}</strong>`;

  // Verifica se os valores obtidos são válidos
  if (isNaN(inicial) || isNaN(taxaJuros) || isNaN(tempo) || inicial <= 0 || taxaJuros < 0 || tempo <= 0) {
    result.innerHTML = "Por favor, preencha todos os campos com números válidos.";
    return;// Interrompe a execução da função, impedindo cálculos incorretos

    
}

    function validarEntrada(campo) {
      // Remove todos os caracteres que não sejam números ou pontos decimais
      campo.value = campo.value.replace(/[^0-9.]/g, '')
       }
}

