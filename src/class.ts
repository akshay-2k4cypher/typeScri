class hii{
    // private height;
    // weight;  if not declared here i have to say public in constructer
    constructor(private height:number,public weight:number,protected sport:string){
        this.height=height;
        this.weight=weight;
    }
    myFunc=()=>{
        return this.height;   //the only way to access private things
    }
}

let f1 =new hii(2,3,'f');
// console.log(height)  //gives error but works in js as there is no private type in JS
console.log(f1.myFunc());

class hii2{
    constructor(private height:number,public weight:number,protected sport:string)
    {}
}

class hello extends hii2{
    constructor(height:number, weight:number,sport:string){
        super(height,weight,sport)
    }
}   
let f2 =new hii(2,3,'f');
f2.weight;