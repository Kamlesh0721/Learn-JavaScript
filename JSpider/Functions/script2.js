// callback function and Higher Order Function

let fun_1 = () => { // Call back Function : Function which is passed to another function as argument
    console.log("Function fun _1");
}

let fun_main = (fun) => { // Higer order Function : It is function which is taking another function as an argument
    // fun_1() // Or
    fun()
}

fun_main(fun_1) 