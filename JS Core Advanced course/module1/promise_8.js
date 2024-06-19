function fetchData(itemId, url) {
    return new Promise((resolve) => {
        fetch(url + itemId)
            .then(data => data.json())
            .then(dataJson => resolve(dataJson))
    })
}

Promise.all([fetchData(1, 'https://jsonplaceholder.typicode.com/users/'), fetchData(2, 'https://jsonplaceholder.typicode.com/comments/')])
    .then(arrData => console.log(arrData))
