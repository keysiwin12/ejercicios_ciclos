var num;

for(i = 1 ; i <=100 ; i++) {
    if(i % 3 == 0 && i % 5 == 0)
        num = "pin pon";
        else if(i % 3 == 0 ) 
            num = "pin";
            else if(i % 5== 0) 
                num = "pon";
                else 
                    num = i;                    
    console.log(num);
}