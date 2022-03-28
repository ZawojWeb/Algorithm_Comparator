export let hybridComparitionCount = 0
export let hybridSwapsCount = 0

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (arr[i] < pivot) {
      hybridComparitionCount++
      i++
    }
    while (arr[j] > pivot) {
      hybridComparitionCount++
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
  hybridSwapsCount++
}

export const insertionSort = (array) => {
  const list = [...array]
  for (let i = 1; i < list.length; i++) {
    let j = i - 1
    let temp = list[i]
    hybridComparitionCount++
    while (j >= 0 && list[j] > temp) {
      if (array[j + 1] > array[j]) {
        hybridComparitionCount++
      }
      list[j + 1] = list[j]
      hybridSwapsCount++
      j--
    }
    list[j + 1] = temp
  }
  return list
}

const hybridSort = (arr, left, right) => {
  let pivot
  while (left < right) {
    if (right - left < 10) {
      insertionSort(arr)
      return
    } else {
      pivot = partition(arr, left, right)
      if (pivot - left < right - pivot) {
        left = pivot
        hybridSort(arr, left, pivot - 1)
      } else {
        right = pivot - 1
        hybridSort(arr, pivot + 1, right)
      }
    }
  }
}

export const hybridSortWrap = (arr) => {
  const list = [...arr]
  try {
    hybridSort(list, 0, list.length - 1)
  } catch (e) {
    if (e instanceof RangeError) {
      console.log('err')
    }
  }
  return list
}

export const resetHybrid = () => {
  hybridComparitionCount = 0
  hybridSwapsCount = 0
}
