let pessoa = {
    nome: 'Demetrio',
    idade: 38,
    endereco: {
        logradouro: 'Rua das Baraúnas'
    }
}
/*
console.log(typeof pessoa)
console.log(typeof Object)
*/
/*
const {nome, idade} = pessoa
console.log(nome, idade)

const {endereco:{logradouro}} = pessoa
console.log(logradouro)
*/
/*
const {nome: name_01, idade: age, bemHumorada = true} = pessoa
console.log(name_01, age, bemHumorada)
*/

const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)


const {conta: {ag}} = pessoa
console.log(ag);



