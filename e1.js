shortcut = () => {
    var foo = "foo";

    let vowels = ["a", "e", "i", "o", "u"]
        //remove vowels from words
    console.log(vowels)

    for (i = 0; i < foo.length; i++) {
        // console.log(foo)
        // console.log(foo[i])
        // vowels.includes(foo[i]) ? foo.replace(foo[i], '')
        if (vowels.includes(foo[i - 1])) {
            return foo.replace(foo[i - 1], '')

        }
    }

    return foo
}

// function shortcut(str) {
//   return str.split('').filter(function(e) {
//     return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
//   }).join('')
// }

//solutions 

// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }

console.log(shortcut())