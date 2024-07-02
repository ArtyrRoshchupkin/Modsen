function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function delayNumber() {
    return new Promise((resolve, reject) => {
        const randomNumber = generateRandomNumber(1, 10);
        delayInseconds = randomNumber * 1000;
        setTimeout(() => {
            if (randomNumber <= 5 && randomNumber >= 1) {
                return resolve(`generated number: ${randomNumber}`)
            } else {
                reject(`error! generated number: ${randomNumber}`)
            }
        }, delayInseconds)
    })
}

delayNumber()
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.error(error);
    });


