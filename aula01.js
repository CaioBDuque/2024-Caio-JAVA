// Tipo Number

// Var era utilizado para toda a variáveis
var numero01 = 10
//let é uma atualização do var e é passivel de variação
let numero02 = 11
// const é uma maneira de declarar uma variável queirá permanecer constante
const numero03 = 7

const soma = numero01 + numero03
const subtracao = numero02 - numero01
const multiplicacao = numero03 * numero02
const divisao = numero02 / numero01

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

// Tipo Float -- ponto flutuante

const numero04 = 11.7
const numero05 = .7

const multiplicacao2 = numero03 * numero05

console.log(multiplicacao2)

// NaN -> Not a Number

const nome = 'Caio'
const falsoNumero = '8'

const naoEnumero = nome * 0.7
const concatenacao01 = falsoNumero + numero04

console.log(naoEnumero)
console.log(concatenacao01)

// Dados do tipo String = Textos

const frase = 'Meu nome é: '
const frase2 = 'O segundo DS é "estudioso", não é?'

const concatenacao02 = frase + nome

console.log(concatenacao02)
console.log(frase2)

// Dados do tipo Boolean
// True -> verdadeiro
// False -> Falso

const numero06 = 8

const comparacao01 = numero06 == falsoNumero
const comparacao02 = numero06 === falsoNumero

// Um sinal de igual (=) é para declarar
// Dois sinais de igual (==) comparando so valores e não o tipo do dado (Comparação fraca)
// Três sinais de igual (===) comparando os tipos de dados.(Comparação forte)

console.log(comparacao01)
console.log(comparacao02)



