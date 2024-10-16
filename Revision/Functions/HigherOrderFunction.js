// Normal function - repetetive
function area(radius) {
  const output = [];
  for(let i=0;i<radius.length;i++){
       output.push(Math.PI*radius[i]*radius[i]);
  }
  return output;
}

function circumference(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
   }
   return output;
}

let radius=[12,3,5,8,2];
console.log(area(radius));
console.log(circumference(radius));

// Higher Order Function

function result(radius,logic){
    let output=[]
        for(let i=0;i<radius.length;i++){
            output.push(logic(radius[i]));
        }
    return output;
}

// area
console.log(result(radius,(radius)=>Math.PI*radius*radius)); // implicit return 
