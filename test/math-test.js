import * as math from '../src/math.js';
import { test } from 'node:test';
import * as assert from 'node:assert';

const dataArray = [
    { numbers: [2, 5, 7, 1, 10, 8, 3, 6], expectedSum: 52},
    { numbers: [2, 2, 2], expectedSum: 12},
    { numbers: [3, 3, 3], expectedSum: 0},
    { numbers: [], expectedSum: 0},
]; 

test('soma dobro números pares funcional', () => {
    dataArray.forEach(data => assert.strictEqual(math.somaDobroNumerosParesFuncional(data.numbers), data.expectedSum));
});

test('soma dobro números pares estruturado', () => {
    dataArray.forEach(data => assert.strictEqual(math.somaDobroNumerosParesProcedural(data.numbers), data.expectedSum));
});
