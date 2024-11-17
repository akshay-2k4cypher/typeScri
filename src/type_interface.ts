type Obj ={
    he:number,
    she:number,
    it?:number,       //this means property is optional
};


let bi:Obj = {
    he:44,
    she:55,
    it:444
}
console.log(bi.it);


//interface is like inheritence
interface Ob {
    He:number,
    She:number,
}

interface NewOb extends Ob{
    sco:boolean,
    fun?: () => void,  //assign to void when u dont want to implement it just declare
}

const gigi:NewOb={
    He: 2323,
    She:33,
    sco:true,
    fun:()=>{
        console.log("hello World!");
    }
};

gigi?.fun?.()           //we should do optional chaining correctly to access optional


type abc = (a:number, b:number) => void;
interface h {
    func?:abc;
}

let ken:h = {
    func:(a,b)=>{
        console.log(a,b);
    },
};

// calling optional property
ken?.func?.(4,5)