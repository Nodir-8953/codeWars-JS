const nbMonths =(newcar, oldCar, earn, precent, endMonth)=>{
    
    // if(endMonth)

    let currentValue = newcar - (oldCar + earn)
    for (let endMonth=1; endMonth++){
        
    }
    console.log(`end month ${endMonth}: percent_loss ${precent} available ${currentValue}`);

    if(currentValue>0) return nbMonths(newcar, oldCar, earn, precent, endMonth)
    else return endMonth, currentValue
    
    
    endMonth += 1
}