let n = prompt('Give me a number of times');
newNumber = 0;
let i = 0;
do {
    ask = prompt('Give me a number to addition')
        if (!isNaN (ask)) {
            newNumber += parseInt(ask)
            n--
        }
        else {
            alert('Not a number')
            if (i = 0) {
                n++
                i++
            }
            
        }
    
    
}while (i != n)
console.log(newNumber)