// Arquivo de exemplo para executar as funções definidas no math.js

import * as math from './math.js';

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // escolha os números que desejar
console.log('Soma usando a abordagem funcional:', math.somaDobroNumerosParesFuncional(numeros))
console.log('Soma usando a abordagem estrutural (procedural):', math.somaDobroNumerosParesProcedural(numeros))
