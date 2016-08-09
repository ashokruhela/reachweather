function addNumber (a, b) {
    return new Promise(function (resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject("both are not number");
        }
    });
}

addNumber(2,4)
.then(function(result) {
    console.log('success', result);
}, function(err) {
    console.error(err);
});

addNumber(2, 'hello')
.then(function(result) {
    console.log('success', result);
}, function(err) {
    console.error(err);
});