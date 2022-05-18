let a = [101, 1, 252, 3, 36]
let max;
for (let i=0; i<a.length; i++){
    for(let j=i; j<a.length; j++){
        if(a[j] > a[j+1]){
            max=a[j]
            a[j]=a[j+1]
            a[j+1]=max
        }
    }
}
console.log(a);


