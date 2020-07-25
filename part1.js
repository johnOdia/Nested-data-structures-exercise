var nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2, 3, 5, 7, 11],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13]
        },
        addSnack: function (snack) {
            this.snacks.push(snack);
            return this;
        }
    }
}


//NUMBER 1
var data = nestedData.innerData.numberData.primeNumbers
for (var i = 0; i < data.length; i++) {
    console.log(data[i])
}

//NUMBER 2
var fibonnaciNums = nestedData.innerData.numberData.fibonnaci
for (var i = 0; i < fibonnaciNums.length; i++) {
    if (fibonnaciNums[i] % 2 === 0) {
        console.log(fibonnaciNums[i])
    }
}

//NUMBER 3
console.log(nestedData.innerData.order[1])

//NUMBER 4
nestedData.innerData.addSnack('chocolate')

//NUMBER 5
//The 'this' keyword as used this scenario refers to the innerData object. The addSnack method is a child of the innerData object.