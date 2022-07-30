
///////////////////////////////////////////////////// 1 method
const nines = n =>{
    let count=0;
    let arr = []
    for(let i=0; i<Number(n); i++){
        arr.push(i)
    }    
    for (let j=0; j<arr.length; j++){
        if(arr[j].toString().includes(9)){
            count ++
        }
    }
    return BigInt(count)    
}
console.log(nines(1000n));


///////////////////////////////////////////////////////// 2 method
const nines2 = n=> {
    let amountOfNines = 0;

    for (let i = 0; i <= Number(n); i++) {
        if (/9/.test(i)) amountOfNines++;
    }

    return BigInt(amountOfNines);
}
  console.log(nines2(1000n));