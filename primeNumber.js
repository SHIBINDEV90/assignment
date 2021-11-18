
function isPrime(num){
    for( i=2; i<num; i++){
        if(num%i==0){
           return "prime"
        }else{
            return "not prime"
        }
    }
  
}
console.log(isPrime(6));