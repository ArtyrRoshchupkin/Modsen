function twoNum(a, b) {
    if (b === 0) {
        throw new Error("второе число функции равно 0")
    }
}

try {
    twoNum(1, 0)
    console.log("all good")
}
catch (error) {
    console.log(error.name)
    console.log(error.message)
}