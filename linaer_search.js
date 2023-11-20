const array = [1,2,3,45,6,5,7]

function linearSerch(array, item){
    for (let i = 0; i< array.lenght; i++){
        if (array[i] === item){
            return i;
        }
    }
    return null
}


console.log(linearSerch(array, 3))
