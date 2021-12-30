let x = 1;

// this is normal while loop
/*
while(conditio){
    code to run 
    final expression
} */
while (x<3){
    for(let i=1; i<=10;i++){
        let result = `${x} x ${i} = ${x*i}`
        console.log(result);
    };
    console.log("\n")
    x++;
}
// this do while loop
/*
do{
    code to run 

    final expression
}while()
*/
do{
for(let i = 1; i < 10; i++){
    let table = `${x} x ${i} = ${x*i}`;
    console.log(table);
}
console.log("\n")
x++;
}while(x <= 10)