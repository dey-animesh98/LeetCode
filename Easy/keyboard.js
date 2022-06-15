// let fRow = 'qwertyuiop'
let sRow ='asdfghjkl'
let array = ["Hello","Alaska","Dad","Peace"]
let c = 0
for (let i = 0; i < array.length; i++) {
   if(/[^asdfghjkl]*$/.test(array[i])){
    c++
   }
    
}
console.log(c)

var findWords = function(words) {
    let fRow ='qwertyuiop', sRow= 'asdfghjkl',tRow ='zxcvbnm'
  
    words.toLowerCase().filter(w=>w.split('').filter(e=>fRow.includes(e)).length==w.length || w.split('').filter(e=>sRow.includes(e)).length==w.length || w.split('').filter(e=>tRow.includes(e)).length==w.length)
  };