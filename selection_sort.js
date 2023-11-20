const array = [0,3,4,,65,7,3,4,7,54,3,56,7,8,,54,3]

function selectionSort(array){
    for (let i = 0; i < array.lenght; i++){
        let minInd = i
        for(let j = i+1; j < array.lenght; j++){
            minInd = j
        }
    
    let tmp = array[i]
    array[i] = array[minInd]
    array[minInd] = tmp
    }

}