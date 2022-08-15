

let number = 9000;
function perfectNumber(){

    for(let y = 1; y < number; y++){
        let s =0;
        for(let z =1; z < y; z++){
           if(y%z==0){
                s+=z;
           }
        }
            //console.log(y + " y");
         //console.log(s + " s");
         if(s==y){
            console.log(y+" Mükemmdir");
         }
    }
    

}

perfectNumber();