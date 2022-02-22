for (let i = 1; i <= 12; i++){
    for (let j = 0; j <= 10; j++){
        console.log(i * j); 
    }
}

i = 1;
j = 0;
while(i <= 12){
    while (j <= 10){
        console.log(i*j);
        j++;
    }
    j = 0;
    i++;
}

i = 1;
j = 0;
do{
     
    do{
        console.log(i*j);
        j++;
    } while(j <= 10)
    i++;
    j=0;
} while(i <= 12);