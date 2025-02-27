// base
let isString: boolean;
let age: number;
let fullName: string;
let bigNumber: bigint;
let uniqueValue: symbol;
let notDefined: undefined;
let empty: null;

// sepcific
let a: any = 100;
console.log(a * 3);
a.toFixed(2);
let b: unknown = 100;
console.log(b * 3); // error
b.toFixed(2); // error

// alias
type StringOrNumber = string | number;
let value: StringOrNumber;
value = 100;
value = 'Hello';

type StringOrNumberOrBoolean = StringOrNumber | boolean;
let value2: StringOrNumberOrBoolean;
value2 = true;

// array
const list1:Array<number> = [1,2,3]
const list:string[]= ["a","b","c"]

//readonly
const numbers:readonly number[] = [1,2,3,4,5]
number[3] = 1;
const strings:ReadonlyArray<string> = ["hello", "hi"]
strings[0] = "good"

// tuple
let tuple: [string, number];
tuple = ["hello",100];
tuple = [100,"hello"];
tuple = ["hello",100, ture];


//object
let obj: {name5:string, age5:number};
let obj2:{readonly name6:string, age6:number}
obj = {name5:"hayashi", age5:54}
obj2 = {name6:"takashi", age6:13}

// index signature
let obj4 : {[key:string]:number};
obj4 = {key1:1,key2:2};
console.log(obj4["key1"])
let obj5: Record<string, number>;

// shorthand property names
const name1 = "hakase";
const age1 = 12;
const obj6 = {
    name1,
    age1
}
console.log(obj);

// option property
let obj3 : {name:string; age?:string};
obj3 = {name:"nami"}
obj3 = {name:"tesra"}

// optional chain
function getLength(obj:{a?:string}) {
    return obj.a?.length    
}
getLength({a:"hello"});

// map