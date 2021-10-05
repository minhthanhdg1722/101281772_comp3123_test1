const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

let lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        let data = arr.filter(e => typeof(e) == 'string')
        data = data.map(e => e.toLowerCase())
        if(data != []){
            resolve(data);
        }
        else {
            reject("No Data")
        }
    })
    
}

lowerCaseWords(mixedArray).then(
    success => console.log(success),
    error => console.log(error)
)

lowerCaseWords(mixedArray);