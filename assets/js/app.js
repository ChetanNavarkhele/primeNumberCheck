let cl = console.log;

const primeNumber = (num) => {
        if(num === 1){
                return `Given number ${num} is not a prime number`;
        }
        if(num === 2){
                return `Given number ${num} is a prime number`;
        }
        for(let i=2; i<num; i++){
                if(num%i === 0){
                        return `Given number ${num} is not a prime number`
                }
        }
        return `Given number ${num} is a prime number`;
}
let givenNumber = 1;
cl(primeNumber(givenNumber));

cl(primeNumber(11))