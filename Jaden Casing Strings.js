//Question
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"



let text = 'heLlo woRLd HoW arE yOU'
// first variant
console.log(text.split(' ').map(el=>{
        first = el.split('')[0].toUpperCase()
        last = el.slice(1).toLowerCase()
        return first+last
        }).join(' '))
// second variant
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){ 
      return word.charAt(0).toUpperCase() + word.slice(1); 
    }).join(" ")}
  
console.log(text.toJadenCase())


