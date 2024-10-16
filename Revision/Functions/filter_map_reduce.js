let a=[1,2,23,12,56,];
// even no.
console.log(a.filter((value)=>{
    if(value%2==0){
        return true;
    }
}));

// sum of  even no
console.log(a.reduce((acc,value)=>{
    if(value%2==0){
        acc+=value;
    }
    return acc;
},0));


// map
console.log(a.map((value)=>{
    return value *10;
}));