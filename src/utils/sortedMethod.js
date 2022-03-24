export const insertion_Sort = (array) => {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1
      let temp = array[i]
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j]
        j--
      }
      array[j+1] = temp
    }
    return array
}

export const quickSort = (array) => {
    const list = [...array]
  
    if (list.length < 2) {
      return list
    }
  
    const pivot = list[0]
  
    const smaller = list.filter((item) => item < pivot)
    const bigger = list.filter((item) => item > pivot)
  
    return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

export const mergeSort = array =>{
  if (array.length <= 1) {
    return array
  }

  const middleIndex = Math.floor(array.length/2)
  const leftArr = array.slice(0,middleIndex)
  const rightArr = array.slice(middleIndex)

  return mergeArr(mergeSort(leftArr),mergeSort(rightArr));
}

const mergeArr = (leftArr, rightArr) =>{
  const output = []
  let leftIndex = 0
  let rightIndex = 0

  while(leftIndex < leftArr.length && rightIndex < rightArr.length){
    const leftEl = leftArr[leftIndex]
    const rightEl = rightArr[rightIndex]

    if(leftEl < rightEl){
      output.push(leftEl)
      leftIndex++
    }else{
      output.push(rightEl)
      rightIndex++;
    }
  }
  console.log(...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex));
  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}