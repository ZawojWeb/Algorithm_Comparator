

export const randomGenerator = (howMany) =>{
    let generateStartArray = [];
    for (let i = 0; i < howMany; i++) {
        generateStartArray[i] = Math.floor(Math.random()* 100000)    
    } 

    return generateStartArray;
}