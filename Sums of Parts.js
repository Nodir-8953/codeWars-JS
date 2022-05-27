//Task 6Kyu
// Let us consider this example (array written in general format):
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

//Solution
/////////////////////////////////
function partsSums(ls) {
    let result = [0]
    for(const n in ls.reverse()){
      result.push(ls[n]+result[n])
    }
    return result.reverse()
}
////////////////////////////////////

let ls = [1, 2, 3, 4, 5, 6]
let lb = []
console.log(partsSums(ls))
console.log(partsSums(lb))
