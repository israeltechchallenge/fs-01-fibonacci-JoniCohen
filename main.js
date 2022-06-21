function Y(X){
    let fibonacci = [];
    fibonacci[0]=0;
    fibonacci[1]=1;
    for(let i=2; i<X; i++){
        fibonacci[i]=fibonacci[i-2]+fibonacci[i-1];
    }
    let fib=fibonacci[fibonacci.length-1];
    return fib
}

console.log(Y(5));

