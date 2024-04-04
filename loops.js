//print 1 to 10
for(let i=1; i<= 10; i++){
    console.log(i);
}

//factorial
let n=5;
let factorial=1;
for(let i=1; i<=n; i++){
    factorial=factorial*i;
}
console.log("factorial of", n, "is", factorial)

//--------while loop--------
let count=0;
let sum=0;
let last=100;
while(count<last){
    sum=sum+count;
    count++;
}
console.log('Sum is ',sum);

//multiplication table

let num=3;
let table=[];
for(let i=1;1<=10;i++){
    table.push(num*i);
}
console.log('Table of ',num, 'is',table);


