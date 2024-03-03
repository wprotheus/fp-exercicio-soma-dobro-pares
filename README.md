# Implementando Funções para Processamento de Dados com Programação Funcional e Estruturada em JS

Este é um projeto [Node.js](http://nodejs.org), logo usa JavaScript no backend. 
O projeto fornece apenas a estrutura básica para você implementar a soma do dobro de um conjunto de números pares em duas implementações diferentes: uma funcional e uma estruturada (procedural).

O projeto está estruturado da seguinte forma:

- [src/math.js](src/math.js): fornece a estrutura das 2 funções descritas acima, que você precisa implementar.
  Você **NÃO** deve alterar nomes de funções nem parâmetros neste arquivo.
  Deve única e excluisivamente inserir o seu código dentro do protótipo das funções fornecidas no arquivo,
  não alterando nada mais no arquivo.
- [src/index.js](src/index.js): arquivo principal para chamar as funções existentes.
  Você pode alterar o arquivo como desejar, alterando os valores do vetor, chamando
  as funções múltiplas vezes com vetores distintos, ou qualquer outra coisa que queira.
- [test/math-test.js](test/math-test.js): arquivo com testes unitários para verificar se suas implementações estão minimamente funcionando como esperado. Você não precisa se preocupar com o código de tal arquivo.

## 1. Como usar o projeto para treinar programação funcional

Este repositório é um template que você pode copiar clicando no botão "Use this template" no topo da página.
Assim, será criada uma cópia do repositório que você pode alterar como desejado.
**O botão só aparece se você estiver logado no GitHub.**

## 2. Pré-requisitos para rodar o projeto

Você precisa de uma versão atual do Node.js (20+).
No linux, basta instalar com:

```bash
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt update -y
sudo apt install nodejs -y
```

No windows, pode baixar o instalador em http://nodejs.org.

## 3. Rodando o projeto

Para rodar o projeto, basta abrir um terminal na pasta raiz e digitar:

```bash
npm start
```

Assim, o arquivo index.js será executado e você poderá ver o resultado à medida que for implementando as funções em [src/math.js](src/math.js).

## 4. Testando sua implementação das funções

Para verificar se suas implementações da soma do dobro dos números pares está funcionando minimamente, execute:

```bash
npm test
```

Se não aparecer nenhum erro nem mensagem em vermelho, seu código tá pronto.

