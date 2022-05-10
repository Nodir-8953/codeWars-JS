// function shark(md, sd, ms, ss, dolphin){
//     if(dolphin){
//         if (2*sd/ss<md/ms) return true 
//         else return false
//     }else{
//         if(sd/ss<md/md){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
// }
// console.log(shark(85,100,10,30,true));

function Numbers(begin, end){
    const newArray = []
    for (var i=begin; i<=end; i++){
        if(i.toString().indexOf(5)!==-1){
            continue
        }
        newArray.push(i)
    }
    return console.log(newArray, `To equal ${newArray.length}`)
}
Numbers(1, 9)