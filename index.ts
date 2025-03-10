import { LargeNumberLike } from 'crypto';

// base
let isString: boolean;
let age: number;
let fullName: string;
let bigNumber: bigint;
let uniqueValue: symbol;
let notDefined: undefined;
let empty: null;

// specific
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
const list1: Array<number> = [1, 2, 3];
const list: string[] = ['a', 'b', 'c'];

//readonly
const numbers: readonly number[] = [1, 2, 3, 4, 5];
numbers[3] = 1;
const strings: ReadonlyArray<string> = ['hello', 'hi'];
strings[0] = 'good';

// tuple
let tuple: [string, number];
tuple = ['hello', 100];
tuple = [100, 'hello'];
tuple = ['hello', 100, true];

//object
let obj: { name5: string; age5: number };
let obj2: { readonly name6: string; age6: number };
obj = { name5: 'hayashi', age5: 54 };
obj2 = { name6: 'takashi', age6: 13 };

// index signature
let obj4: { [key: string]: number };
obj4 = { key1: 1, key2: 2 };
console.log(obj4['key1']);
let obj5: Record<string, number>;

// shorthand property names
const name1 = 'hakase';
const age1 = 12;
const obj6 = {
  name1,
  age1,
};
console.log(obj);

// option property
let obj3: { name: string; age?: string };
obj3 = { name: 'nami' };
obj3 = { name: 'tesra' };

// optional chain
function getLength(obj: { a?: string }) {
  return obj.a?.length;
}
getLength({ a: 'hello' });

// map
let map: Map<string, number>;
map = new Map();
map.set('name', 'jj');
map.set('age', 23);
console.log(map);

let people: Map<string, number> = new Map();
people.set('string', 234);

// set
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);

// enum
enum week {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
enum weekJp {
  Sunday = '日曜日',
  Monday = '月曜日',
  Tuesday = '火曜日',
  Wednesday = '水曜日',
  Thursday = '木曜日',
  Friday = '金曜日',
  Saturday = '土曜日',
}
enum weekEn {
  Sunday,
  Monday = 3,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

console.log(week.Sunday);
console.log(weekJp.Sunday);
console.log(weekEn.Sunday);
console.log(weekEn.Monday);

// union
let union: string | number;
union = 1;
union = 'hello';

// discriminated union
type InProgress = {
  type: 'InProgress'; // これがディスクリミネータ
  progress: number;
};
type Success = {
  type: 'Success';
};
type Failure = {
  type: 'Failure';
  error: Error;
};
type UploadStatus = InProgress | Success | Failure;

function getStatus(status: UploadStatus) {
  if (status.type === 'InProgress') {
    return status.progress;
  } else if (status.type === 'Success') {
    return status.type;
  } else {
    return status.error;
  }
}

// intersection
type Dog = { bow: string };
type Cat = { meow: string };
type Pet = Dog & Cat;
const dogcat: Pet = { bow: 'バウ！', meow: 'ミャウ!' };

// type guard
//// typeof
function isDog(pet: Pet) {
  if (typeof pet.bow === 'string') {
    return true;
  }
  return false;
}

//// instanceof
function getMonth(date: string | Date | null) {
  // if(typeof date === "object"){
  //     // date.getMonth(); warning
  // }

  if (date instanceof Date) {
    date.getMonth();
  }
}

//// in
interface Color {
  r: number;
  g: number;
  b: number;
  getRGB(r, g, b): string;
}

function isColor(color: Color) {
  if ('r' in color) {
    return true;
  }
  return false;
}
let color: Color = {
  r: 0,
  g: 0,
  b: 0,
  getRGB(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
  },
};

//function
//// arrow function
const add = (a: number, b: number): number => a + b;
//// default function
function getLight(direction: string): number {
  return 10;
}

// destructuring type annotation
//// array
function foo([a, b]: [string, number]) {}

//// object
function bar({ a, b }: { a: string; b: number }) {
  console.log(a, b);
}

// Promise
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('promise resolved');
  } else {
    reject('promise rejected');
  }
});

promise.then((data) => {
  console.log(data);
});

// async await
function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function asyncFunc() {
  console.log('start');
  await delay(3000);
  console.log('end');
}

asyncFunc();

// generics
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>('isString');
const output2 = identity<number>(123);

// module
// import export
export const exportConst = 'export const';
export function exportFunc() {
  return 'export function';
}
export class exportClass {
  name = 'export class';
  constructor() {}
  func() {
    console.log(this.name);
  }
}

// import { exportConst, exportFunc, exportClass } from './index';// 別ファイルで呼び出す場合

// default export
export default function () {
  console.log('default export');
}

// type import type export
export type MyObject = {
  name: string;
  age: number;
};
// import type { MyObject } from './index';// 別ファイルで呼び出す場合

// type program
//// typeof
const object = {
  name: 'hayashi',
  age: 54,
  greet: () => 'hello',
};
type ObjectType = typeof object;

////keyof
type Point = {
  x: number;
  y: number;
};
type PointKeys = keyof Point;
type point = 'x' | 'y';

const point1: PointKeys = { x: 1, y: 2 };
const point2: point = { x: 1, y: 2 };

console.log(typeof point1 == point2); //false

// utility types
//// Required
type Person = {
  name: string;
  age?: number;
  greet?: () => string;
};

type RequiredPerson = Required<Person>;

// type guard function
function isString2(value: any): value is string {
  return typeof value === 'string';
}

function printLength(value: any) {
  if (isString2(value)) {
    console.log(value.length);
  }
}
printLength('hello');

// class
class Person {
  // public name: string;
  public readonly name: string;
  protected age: number;
  private id: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = 1;
  }
  introduce() {
    console.log(`I'm ${this.name}. I'm ${this.age} years old.`);
  }
}
const john = new Person('John', 20);
console.log(john.introduce());
john.name = 'bob';
console.log(john.name);
john.age = 30;
john.id = 2;

// constructor shorthand

class Person2 {
  // static
  static x = 0;
  constructor(public name: string, public age: number) {}
  static increment() {
    this.x++;
  }
}

Person2.increment();
console.log(Person2.x);

// interface class

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`hello, I'm ${this.name}`);
  }
}

class Bard extends Animal {
  fly(): string {
    return 'fly';
  }
}

const bird = new Bard('bird');
bird.greet();
console.log(bird.fly());

// instanceof
console.log(bird instanceof Bard);
console.log(bird instanceof Bard);

// abstract class
abstract class Animal2 {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earth...');
  }
}

class Fog extends Animal2 {
  makeSound(): void {
    console.log('bow bow');
  }
}
const fog = new Fog();
fog.move();
fog.makeSound();

// getter setter
class Circle {
  private _radius: number;
  constructor(radius: number) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius: number) {
    if (radius <= 0) {
      throw new Error('radius must be positive');
    }
    this._radius = radius;
  }
}

const circle = new Circle(10);
console.log(circle.radius);
circle.radius = 100;
console.log(circle.radius);
circle.radius = -1;
console.log(circle.radius);

// interface
interface Point {
  readonly x: number;
  readonly y: number;
  sum(): number;
}

const point: Point = {
  x: 10,
  y: 20,
  sum() {
    return this.x + this.y;
  },
};

class Point2 implements Point {
  constructor(readonly x: number, readonly y: number) {}
  sum() {
    return this.x + this.y;
  }
}

// Custom error
class CustomError extends Error {
  code = 'CustomError';
  constructor(message?: string) {
    super(message);
  }
}

try {
  throw new CustomError('this is custom error');
} catch (error) {
  if (error instanceof CustomError) {
    console.log(error.code);
  }
}
