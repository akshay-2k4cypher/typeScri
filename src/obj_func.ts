type Obj2 ={                //Object type defining
    readonly name:string,                                 //now once value assigned cant be changed
    place:string
}
type pr = (a: {})=>void;           //Function type defining          //Type object assignment

let rav1:pr = (p)=>{            //Function Type assigning
    console.log(p);
}

let one:Obj2 ={                    //object type assigning
    name:'ak',
    place:'bengaluru',
};

rav1(one);



//example 2     ---- (usefull when data is coming from API)

type pr2 = (a:Obj2)=>void;           //Function type defining        //Type object assignment is also same

let rav2:pr = (p)=>{            //Function Type assigning
    console.log(p);
}
rav2(one);