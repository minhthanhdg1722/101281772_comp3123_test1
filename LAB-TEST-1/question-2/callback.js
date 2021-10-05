const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        resolve(success);
    }, 500);
});


resolvedPromise.then(
    success => console.log(success)
)

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = {'error': 'delayed exception!'}
        reject(error);
    }, 500);
});


rejectedPromise.then(
    success => console.log(success)
).catch(error => console.log(error))