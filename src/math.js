/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros) {
    const somaFuncional = numeros
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((soma, n) => soma + n, 0);
    return somaFuncional;
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros) {
    let soma = 0;
    for (const numero of numeros)
        if (numero % 2 === 0) soma += numero * 2;
    return soma;
}

export {somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural};