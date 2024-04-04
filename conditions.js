let pill;
console.log(pill)

if (pill=='red') {
    console.log('Reality')
}
else if(pill=='blue')
{
    console.log('Stay in matrix')
}
else{
    console.log('Kill yourself')
}

switch(pill){
    case 'red': {
    console.log('Reality')
    break;
}
    case 'blue': {
    console.log('Reality')
    break;
}
    case 'both': {
    console.log('Kill yourself')
    break;
}
}

let number='one'
if(number % 2==0)
{
    console.log('number is even',number);
}
else if(number % 2==1)
{
    console.log('Number is odd', number);
}
else{
    console.log('invalid input');
}


let year;
if(year % 100==0)
{
    if(year %400==0)
    {
        console.log('Leap year', year)
    }
    else if(yesr % 4==0)
    {
        console.log('Leap year', year)
    }
    else{
        console.log('Not a leap year')
    }
}

let marks;
let grade;
if (marks>=80){
    grade='A';
}else if (marks<80&& marks>=60){
    grade ='B';
}else if(marks< 60 && marks>=40){
    grade='C';
}else if(marks< 40 && marks>=0){
    grade='D';
}else{
    grade='undefined';
}
console.log('Grade',grade);


let a,b,c;
if(a==b && b==c && c==a){
    console.log('Triangle is equilateral')
}else if(a==b || b==c || c==a ){
    console.log('Triangle is isosceles')
}else{
    console.log('Triangle is scalene')
}


