const makeXOGrid = (rows, columns) => {
  let array = []
  let xo = true;
  for (let i = 0; i < rows; i++) {
    array.push([]);
    for (let j = 0; j < columns; j++){
      if (xo){
        array[i].push('X')
        xo = false
      }
      else {
        array[i].push('O')
        xo = true
      }
    }
  }
  return array;
}

  console.log(makeXOGrid(1,4))
  console.log(makeXOGrid(3,2))
  console.log(makeXOGrid(3,3))