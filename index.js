const mapToNegativize = function(sourceArray) {
    return sourceArray.map((numberVar) =>
        numberVar * -1
    )
}

const mapToNoChange = function(sourceArray) {
    return sourceArray.map((numberVar) => 
        numberVar 
    )
}

const mapToDouble = function(sourceArray) {
    return sourceArray.map((numberVar) => 
        numberVar * 2
    )
}

const mapToSquare = function(sourceArray) {
    return sourceArray.map((numberVar) => 
        numberVar * numberVar
    )
}

const reduceToTotal = function(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((total, amount) => {
        return total + amount
    }, startingPoint)
}

const reduceToAllTrue = function(sourceArray) {
    let memo = true 
    sourceArray.reduce((total, amount) => {
         if (!amount) {
            memo = false 
         }
    })
    return memo 
}

const reduceToAnyTrue = function(sourceArray) {
    let memo = false 
    sourceArray.reduce((total, amount) => {
        if (!!amount) {
            memo = true 
        }
    })
    return memo
}