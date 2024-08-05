let operation = (task, n1, n2) => {
    task(n1, n2)
}

let add = (n1, n2) => {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
}
let sub = (n1, n2) => {
    console.log(`${n1} - ${n2} = ${n1 - n2}`);
}
let mul = (n1, n2) => {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}
let div = (n1, n2) => {
    console.log(`${n1} / ${n2} = ${n1 / n2}`);
}

operation(add, 4, 2)
operation(sub, 4, 2)
operation(mul, 4, 2)
operation(div, 4, 2)