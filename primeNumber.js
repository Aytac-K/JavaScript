

let c = 0;
function findPrime(...numbers){

 for(let i = 0; i < numbers.length; i++) {
       
        for(let j = 2; j < numbers[i]; j++) {
            
            if(numbers[i] % j == 0){
                c++;
               
            }
            if(numbers[i]==0){
                console.log(numbers[i] +" sayı 0 dır")
            }

        }
        
        if(c==0){
            console.log(numbers[i] +" asaldır")

        }
        else{
            console.log(numbers[i]+" asal değildir")
        }
    
 }

}
findPrime(0,2,3,5,7,11,43,8,5,13,231);
