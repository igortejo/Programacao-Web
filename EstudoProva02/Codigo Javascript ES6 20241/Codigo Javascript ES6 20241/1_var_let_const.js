//var a = 30
//let b = 4 //ES6

//let a = 60
//var a = 60
//console.log(a, b)

//a = 60
//var a = 30
//console.log(a, b)
/*
b = 40
const c = 5

console.log(a, b, c)
*/
/*
for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i=', i)
*/

const functions = []

for (var i = 0; i < 10; i++){
    functions.push(function(){
        console.log(i)
    })
}

functions[5]()
functions[6]()
functions[9]()