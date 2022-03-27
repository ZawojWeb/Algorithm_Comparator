// This implementation is for better operation counting
export let stepsForQuick = []


const swap = (items, leftIndex, rightIndex) => {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

const partition = (items, left, right) => {
    const pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

export const quickSort = (items, left, right) => {
    const index;
    const list = [...items]

    if (list.length > 1) {
        index = partition(list, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(list, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(list, index, right);
        }
    }
    return list;
}

export const resetQ = () => {
   stepsForQuick.length = 0

}