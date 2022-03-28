export let stepsForInser = []
export let stepsForQuick = []
export let stepsForMerg = []
export let quickSwapsCount = 0
export let meregeSwapsCount = 0
export let insertSwapsCount = 0
export let quickComparitionCount = 0
export let meregeComparitionCount = 0
export let insertComparitionCount = 0

let merageHelper = 0
let quickHelper = 0

export const insertionSort = (array) => {
  const list = [...array]
  for (let i = 1; i < list.length; i++) {
    let j = i - 1
    let temp = list[i]
    insertComparitionCount++
    while (j >= 0 && list[j] > temp) {
      if (array[j + 1] > array[j]) {
        insertComparitionCount++ //if in next iterantion will be compare
      }
      list[j + 1] = list[j]
      insertSwapsCount++
      j--
    }
    list[j + 1] = temp
  }
  return list
}

export const mergeSort = (array) => {
  if (array.length <= 1) {
    return array
  }

  const middleIndex = Math.floor(array.length / 2)
  const leftArr = array.slice(0, middleIndex)
  const rightArr = array.slice(middleIndex)

  const newLeftArr = mergeSort(leftArr)
  const newRightArr = mergeSort(rightArr)

  const newArrayCheck = newLeftArr.concat(newRightArr)
  for (let i = 0; i < array.length; i++) {
    if (array[i] != newArrayCheck[i]) {
      meregeSwapsCount++
    } //Bcs pivot is not in newArray
  }

  return mergeArr(newLeftArr, newRightArr)
}

const mergeArr = (leftArr, rightArr) => {
  const output = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex]
    const rightEl = rightArr[rightIndex]

    if (leftEl < rightEl) {
      output.push(leftEl)
      leftIndex++
    } else {
      output.push(rightEl)
      rightIndex++
    }
    meregeComparitionCount++
  }
  // Steps
  if ([...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)].length > merageHelper) {
    stepsForMerg.push([...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)])
    merageHelper = [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)].length
  }
  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

//Quick Sort
export const quickSortWrap = (arr) => {
  const list = [...arr]

  try {
    quickSort(list, 0, list.length - 1)
  } catch (e) {
    if (e instanceof RangeError) {
      console.log('err')
    }
  }

  return list
}

const quickSort = (arr, left, right) => {
  let index
  let newArray = [...arr]
  stepsForQuick.push(newArray)

  if (arr.length > 1) {
    index = partition(arr, left, right)
    if (left < index - 1) {
      quickSort(arr, left, index - 1)
    }
    if (index < right) {
      quickSort(arr, index, right)
    }
  }
  return arr
}

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (arr[i] < pivot) {
      quickComparitionCount++
      i++
    }
    while (arr[j] > pivot) {
      quickComparitionCount++
      j--
    }
    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  quickSwapsCount++
}

export const resetArrays = () => {
  stepsForInser.length = 0
  stepsForQuick.length = 0
  stepsForMerg.length = 0
  merageHelper = 0
  quickHelper = 0
  quickSwapsCount = 0
  meregeSwapsCount = 0
  insertSwapsCount = 0
  quickComparitionCount = 0
  meregeComparitionCount = 0
  insertComparitionCount = 0
}
