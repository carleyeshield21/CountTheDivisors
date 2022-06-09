// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
    counter = 0
    arr = []
    for(i=1; i<=n; i++){
        if(n%i == 0){
            arr.push(i)
            counter++
        }
    }
    console.log(`The number ${n} has ${counter} divisors\nWhich are as follows:\n${arr}`)
}
getDivisorsCnt(4)
console.log('=====')
getDivisorsCnt(5)
console.log('=====')
getDivisorsCnt(12)
console.log('=====')
getDivisorsCnt(30)