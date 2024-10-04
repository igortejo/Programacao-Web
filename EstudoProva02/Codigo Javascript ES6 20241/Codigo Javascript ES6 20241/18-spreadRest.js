// operador rest - Agrupar
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

//Agrupou em uma estrutura do tipo array
//console.log(total(2, 3, 4, 5, 6, 8, 9))

// usar spread com objeto
/*
const funcionario = { nome: 'João Lucas', salario: 12348.99}
const clone = {ativo: false, funcionario}
clone.nome = 'Wellyngton'
console.log(funcionario, clone)
*/
/*
const funcionario1 = {...clone}
const funcionario2 = {...funcionario1}
const funcionario3 = {...funcionario2}
*/
//console.log(funcionario1, funcionario2, funcionario3)
// usar spread com array

const grupoA = ['GABRIEL', 'LUCAS', 'JOSÉ DIEGO']
const grupoFuncionarios = [{ nome: 'LARISSA', salario: 12348.99}, 
{ nome: 'PEDRO', salario: 12348.99}, 
{ nome: 'RONILDO', salario: 12348.99}]
const grupoFinal = [...grupoFuncionarios, ...grupoA, ...grupoFuncionarios]
console.log(grupoFinal)
