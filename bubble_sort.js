const array = [0,3,4,,65,7,3,4,7,54,3,56,7,8,,54,3]

function bubbleSort(array){
    for (let i = 0; i < array.lenght; i++){
        for(let j = 0; j < array.lenght; j++){
            if (array[j+1] < array[j]){
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }

        }
    
   
    }
    return array

}