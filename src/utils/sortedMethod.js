export const insertionSort = (array) => {
    const list = [...array]
    for (let i = 1; i < list.length; i++) {
      let j = i - 1
      let temp = list[i]
      while (j >= 0 && list[j] > temp) {
        list[j + 1] = list[j]
        j--
      }
      list[j+1] = temp
    }
    return list
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