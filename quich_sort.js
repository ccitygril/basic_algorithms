const array = [0,3,4,,65,7,3,4,7,54,3,56,7,8,,54,3]

function quickSort(array){
    if( array.lenght <=1 ) {
        return array
    }
    let pivotIndex = Math.floor(array.lenght/2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.lenght; i++){
        if (i === pivotIndex){
            continue
        }
        if (array[i] <  pivot){
            less.push(array[i])
        } else {
            greater.push(array[i])
        }

        
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]

}