let products={
  return[ { id:1,title:"laptop"}]

}

let va1=products.forEach((ele,i,arr)=>{
    console.log(ele.title,i,arr);
    return "Hello";
});

let va2=products.forEach((ele,i,arr)=>{
    console.log(ele.title,i,arr);
    return "Bye";
})

console.log(var1);
console.log(var2);