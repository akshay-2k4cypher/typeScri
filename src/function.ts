// type guard
type ab =(a:number,b:number,c?:number)=>number;
let funct:ab = (a,b,c) =>{
    if(typeof(c)==='undefined') return a*b
    return a*b*c
}
funct(10,20);
//adding default value if not passed

type bc = (a:number,b:number,c?:number)=>number|string;       //if c was not optional then it would show error 
let func2:bc= (a,b,c=20)=>{                                   //becuase TS doesnt know that it has default value
    return a*b*c
}
func2(3,4)


// alternate way

let funct2:ab = (a:number,b:number,c:number=10):number=>{
    return a*b*c;
}
funct2(7,8);


// Rest Operator (...m:number[])
type bcd = (...m:number[])=>number;       
let func3:bcd= (a,b,c=20)=>{                      
    return a*b*c;
}
console.log(func3(2,3));
// example 2
type bcde = (...m:number[])=>number[];       
let func4:bcde= (...m:number[])=>{                      
    return m;
}
console.log(func4(33,5,4,3));

// normal function

function lol(n:number):number{
    return 3;
}

let cann:bcde = function lol(...n:number[]){   //when normal syntax directly we cant just assign the type we have to assign it to a variable
    return n;
}
console.log(cann(7,8,9,7));

