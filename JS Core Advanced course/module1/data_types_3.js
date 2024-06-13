function summa(number){
    let a=number.split('')
    return (Number(a[0])+Number(a[(a.length)-1]))
}console.log(summa('12345'))