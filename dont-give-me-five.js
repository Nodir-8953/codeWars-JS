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