const sum = (n) => {
    let s = 0
    for (let i = 0; i < n.toString().length; i++) {
      s += parseInt(n.toString().charAt(i))
    }
    if (s > 9) return sum(s)
    else return s
  }
console.log(sum(1234))