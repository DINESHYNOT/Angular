export { }
//var keyword
var number = 20;
console.log(number);
//const keyword
const name = "dinesh";
//const name_1 => error without a initialization
console.log(name);
//types to the variable
let names_2: string = "dinesh";
let beginners: boolean = false;
let id: number = 127;
//template variables 
const sentences = `My name is ${name} and i doing intern A aspire systems`;
console.log(sentences);
//types in array
let list: number[] = [1, 2, 3, 4, 5];
let list1: Array<number> = [1, 2, 3, 4, 5];
let list2: string[] = ["a", "b", "c", "d"];
console.log(list);
console.log(list1);
console.log(list2);
//string and numbers - tuples
let person: [number, string] = [127, "dinesh"];
//enum
enum days { sun = 1, mon, tues, wednes, thur, fri, satur };
console.log(days.satur);
//any type
let randomvalue: any = 10;
randomvalue = true;
randomvalue = "dinesh k";
console.log(randomvalue);
//function
function hasname(id_1: number, rollno: any) {
    console.log(id_1 + " " + rollno);
}
hasname(136, '191ME127');
//union type 
let multitype: boolean | number;
multitype = true;
multitype = 100;
console.log(multitype);
//optional parameters in function
function add(num1: number, num2?: number) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(10, 90));
console.log(add(45));
//Without interface
let person1 = {
    firstname: 'dinesh',
    lastname: 'kumar',
    age: 21
};
function details(person1: { firstname: string, lastname: string }) {
    console.log(person1.firstname + " " + person1.lastname);
}
details(person1);
//with using interface
let person2 = {
    firstname1: 'dinesh',
    lastname1: 'kumar',
};
interface person_interface {
    firstname1: string;
    lastname1: string;
}
function details1(person1: person_interface) {
    console.log(person1.firstname1 + " " + person1.lastname1);
}
details1(person2);
//class
class employee {
    employeename: string;
    constructor(name: string) {
        this.employeename = name;
    }
    greet() {
        console.log(`greeting ${this.employeename}`);
    }
}
let employee1 = new employee('Gowtham');
employee1.greet();
//inheritance
class company {
    c_name: string;
    c_location: string;
    constructor(name: string, location: string) {
        this.c_name = name;
        this.c_location = location;
    }
    c_details() {
        console.log(`${this.c_name} ${this.c_location}`);
    }
}
class Aspire extends company {

}
let company_1 = new Aspire("Aspire", "Bangalore");
company_1.c_details;