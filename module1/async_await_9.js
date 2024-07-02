function fetchAsyncData(itemId, url) {
    return new Promise(async (resolve) => {
        const response = await fetch(url + itemId)
        const data = await response.json()
        resolve(data)
    })
}

Promise.all([fetchAsyncData(2, 'https://jsonplaceholder.typicode.com/users/'), fetchAsyncData(3, 'https://jsonplaceholder.typicode.com/comments/')])
    .then(arrData => console.log(arrData))