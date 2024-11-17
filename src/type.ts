// assigning type
const a:string ="{123hi}";
let b=<string>"hiii";

// type to function
const func = (a:number,b:number):number => {  //var is assigned function
    console.log(a,b);
    return a*b;
};


// type casting
type username = string|number;
let c:username=777;


// type casting to a function
type typ = (a:number,b:number) => number ;  //return type is after arrows while creating using type

const fun:typ = (z,b) => { //dont forget to use =
    console.log(z,b);
    return z*b;
};

//Type theme mode

type themeMode = 'light' | 'dark';
const mode:themeMode = "light"

// never and error types

const errorHandler = () =>{      //this is type error 
    return new Error();      //Use unknown (or error in some cases) for values that may represent errors, but with the requirement to check or handle them safely.
}

const err = ()=> {          //never is the type
    throw new Error();       //if you have some infinite loop running never type will not execute only
}
// since there are no defined return type annotations nor any reachable endpoints, we should use never type.