function mapToNegativize (array) {
  let newArr = []
  for (let num of array) {
      newArr.push(num * -1)
  }
  return newArr
}

function mapToNoChange (arr) {
  let newArr;
  return newArr = arr.slice()
}

function mapToDouble(array) {
  let newArr = [];
  for (let num of array) {
    newArr.push (num * 2)
  }
  return newArr
}

function mapToSquare(array) {
  let newArr = [];
  for (let num of array) {
    newArr.push (num ** 2)
  }
  return newArr
}

function reduceToTotal(array, tot = 0) {
  for (let num of array) {
    tot += num;
  }
  return tot
}

function reduceToAllTrue(array) {
  let truth = true;
  for (let val of array) {
    if (val === false) {
      truth = false
    }
  }
  return truth
}


function reduceToAnyTrue(array) {
  for (let val of array) {
    if (val === true) {
      return true
    }
  }
  return false

}
