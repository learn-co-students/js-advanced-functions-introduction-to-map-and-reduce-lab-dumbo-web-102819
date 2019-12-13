function mapToNegativize(arr) {
    return arr.map((e) => {
     return e * -1;
   });
 }
 
 function mapToNoChange(arr) {
   return arr
 }

 function mapToDouble(arr) {
    return arr.map((e) => {
      return e * 2
    });
 }

 function mapToSquare(arr) {
    return arr.map(e => {
      return Math.pow(e, 2)
    });
}

function reduceToTotal(arr, starting = 0) {
    let total = arr.reduce((accum, num) => {
        return accum + num;
    });
    return total + starting;
}

function reduceToAllTrue(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i]) {
        return false
        }
    }
    return true;
}

function reduceToAnyTrue(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]) {
         return true
        }
    }
    return false;
}

  
