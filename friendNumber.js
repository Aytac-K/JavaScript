
let number1 = 5020;
let number2 = 5564;
let c = 0;
let friend = 0;
function friendNumber(...number){

for(let i = 0; i < number.length; i++) {

    for(let y = 0; y <number[i]; y++){
        if(number[i] % y == 0){
            c+=y;            
        }                
    }     
    if(c==number2){
        friend++;  
    }   
}
if(friend==1){
    console.log(number1+" and "+number2 +" This Numbers is Friend");
}
else{
    console.log("Not Friend");
}
}
friendNumber(number1,number2);