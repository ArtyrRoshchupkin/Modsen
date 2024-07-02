'use strict'
function getCount(str){
let arr = ['a','e', 'i', 'o', 'u', 'y', 'A','E', 'I', 'O', 'U', 'Y']
let amountOfLetters = 0

    for(let i=0; i<str.length; i++){
        for(let j=0; j<arr.length; j++){
            if(str[i]===arr[j]){
                amountOfLetters+=1
            }else continue
        }
    }return amountOfLetters
    
}