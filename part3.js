const rotate = (array,number) => {
    for (i = 0; i < number; i++){
      array.unshift(array.pop())
    }
    return array;
  }
  console.log(rotate([1,2,3],1))
  console.log(rotate([1,2,3],2))
  console.log(rotate([1,2,3],3))