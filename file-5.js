// //multiple conditions

let number;
number=10;

if(number>0)
{
    document.write("Number is greater than 0");
}
else if(number==0)
{
    document.write("Number is zero");
}
else{
    document.write("Number is less than zero");
}


let temp=30;


if(temp<0)
{
    document.write("It's freezing!");
}
else if(temp>=0 && temp<10)
{
    document.write("Very Cold temperature");
}
else if(temp>=10 && temp<20)
{
    document.write("Cold temperature");
}
else if(temp>=20 && temp<30)
{
    document.write("Mid Temperature");
}
else if(temp>=30 && temp<40)
{
    document.write("Warm temperature");
}
else{
    document.write("Hot temperature");
}

// using switch

var tempp= 30;

switch(true)
{
    case tempp<0:
        {
            document.write("Freezing");
            break;
        }
    case tempp<10:
        {
            document.write("Very Cold");
            break;
        }
    case tempp<20:
        {
            document.write("Cold");
            break;
        } 
    case tempp<30:
        {
            document.write("Mid");
            break;
        }    
    case tempp<40:
        {
            document.write("Warm");
            break;
        }    
    case tempp<50:
        {
            document.write("Hot");
            break;
        }    
    default:
        {
            document.write("Invalid Temperature");
            break;
        }    
}