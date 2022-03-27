export let quickComparitionCountDQ = 0;
export let quickSwapsCountDQ = 0;

export const dualPivotQuickSortWrap = (arr) => { 
    const list = [...arr]
  
    try {
      dualPivotQuicksort(list, 0, list.length - 1);
    }catch(e){
      if ( e instanceof RangeError) {
        console.log("err" );
      }
    }
    return list;
  }


  const swap = (arr, i, j) => {
    quickSwapsCountDQ++;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  const partition = (arr, left, right, pivot1, pivot2) => {
    let storeIndex = left;
    for (let i = left; i <= right; i++) {
      if (arr[i] < pivot1) {
        quickComparitionCountDQ++;
        swap(arr, i, storeIndex);
        storeIndex++;
      } else if (arr[i] < pivot2) {
        quickComparitionCountDQ++;
        swap(arr, i, storeIndex + 1);
        storeIndex++;
      }
    }
    return storeIndex;
  }
  
  const dualPivotQuicksort = (arr, left, right) => {
    if (right <= left) {
      return;
    }
    let pivot1 = arr[left];
    let pivot2 = arr[right];
    
    let storeIndex = partition(arr, left, right, pivot1, pivot2);
    dualPivotQuicksort(arr, left, storeIndex - 1);
    dualPivotQuicksort(arr, storeIndex + 1, right);
  }


export const reset = () => {
  quickComparitionCountDQ = 0;
  quickSwapsCountDQ = 0;
}