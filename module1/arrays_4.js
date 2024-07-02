function sqr(arr){
    
    for(let i = 0; i<arr.length; i++){
        arr[i]*=arr[i]
    }
    console.log(arr)
    let b=0
   for(let i=0; i<arr.length; i++){
       b+=arr[i]
   }
    return b
}console.log(sqr([1,2,3,4,5]))