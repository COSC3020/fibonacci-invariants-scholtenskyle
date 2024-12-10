function fib(n){
    let a = Array(n+1);
    a[0] = 0;
    Solver(n, a);
    return a;
}

function Solver(x, array1){
    if (x < 0){
        return array1;
    }
    if (x == 1){
        array1[1] = 1;
        return 1;
    }
    if (array1[x] != undefined){
        return array1[x];
    }
    array1[x] = Solver(x-1, array1) + Solver(x-2, array1);
    return array1[x];
}
