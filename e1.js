shortcut = () => {
    var foo = "foo";

    let vowels = ["a", "e", "i", "o", "u"]
        //remove vowels from words
    console.log(vowels)

    for (i = 0; i < foo.length; i++) {
        vowels.includes(foo[i]) ? foo.slice(0, i)
    }

    return foo
}

console.log(shortcut())