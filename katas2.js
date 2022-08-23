// comece a criar a sua função add na linha abaixo
function add(a,b){
    return a + b
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
// console.log(add(3,5))

// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){

    let produto = 0

    for(let i = 1; i <= a;){
        produto = add(produto, b)
        i = add(i,1)
    }
    return produto    

}

// descomente a linha seguinte para testar sua função
console.assert(multiply(6, 8) === 48, 'A função multiply não está funcionando como esperado');
// console.log(multiply(6, 8))

// comece a criar a sua função power na linha abaixo
function power(x,n){

    let exponenciacao = 1

    for(let i = 1; i <= n; ){
        exponenciacao = multiply(exponenciacao, x)
        i = add(i, 1)
    }
    
    return exponenciacao
}

// descomente a linha seguinte para testar sua função
console.assert(power(2, 8) === 256, 'A função power não está funcionando como esperado');
// console.log(power(2, 8))

// comece a criar a sua função factorial na linha abaixo
function factorial(n){
    
    let factor = 1

    let num = n

    for(let i = 1; i <= n-1; ){
        factor = multiply(factor, num)
        num = n-i
        i = add(i, 1)
    }

    return factor
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
// console.log(factorial(5))

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n){
    let fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    for (let i = 2; i < n;){
    fibonacci[i] = add(fibonacci[i - 2], fibonacci[i - 1])
    i = add(i, 1)
    }
    return fibonacci[n-1]
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
console.log(fibonacci(7))