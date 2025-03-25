// document.writeln("Helo World");

// // syntax
// // write=menulis tanpa enter, writeln=menulis dengan enter
// // ============================================================================================================ //
// // tipe data : number=angka. koma=titik | number notation, hexadicimal=0x, octal=0b, binary=0o
// document.writeln(1);
// document.writeln(1.1);
// document.writeln(0x1);
// document.writeln(0b1);
// document.writeln(0o1);

// // tipe data : boolean=true(T)/false(F) 
// document.writeln(true);
// document.writeln(false);

// // tipe data : string=teks, gunakan " atau ' | + untuk menggabungkan string
// document.write('string');

// // escape character : \n=new line, \t=tab, \b=backspace, \r=return, \f=form feed, \\=backslash, \'=single quote, \"=double quote
// document.writeln("\n");
// document.writeln("\t");
// document.writeln("\b");


// // variabel : var=bisa diubah | let=bisa diubah (rekom) | const=tidak bisa diubah

// // operator matematika : + - * / % 
// // ++ -- += -= *= /= %= (increment) 
// let a = 9 + 1;
// document.writeln(a);
// b = a - 2;
// document.writeln(b);
// let c = b%9;
// document.writeln(c);
// c += 9
// document.writeln(c);
// d= 3;
// d++;
// document.writeln(d++);

// // operator perbandingan = true/false | == === != !== > < >= <=

// let e = 4 ==  "4";
// document.writeln(e);
// let f = 4 === "4";
// document.writeln(f);
// let g = 4 != 4;
// document.writeln(g);
// let h = g < a;
// document.writeln(h);

// // operator logika = true/false | &&=and, ||=or, !=not

// let nilaiUjian = 80;
// let absensi = 95;

// let lulus = nilaiUjian > 75 || absensi > 75;
// document.writeln(lulus);

// //  ============================================================================================================ //

// // console method : log, warn, error, info, table, time, timeEnd, count, clear

// // console.log("lulus");
// // console.warn("warn");
// // console.error("error");

// // string template : `string ${variabel}`

// // multi line string : 

// let multiline = `one
// two
// three`;
// document.writeln("<pre>");
// document.writeln(multiline);
// document.writeln("</pre>");

// // konversi number dan number : parseInt(string), = string ke number bilangan  bulat | parsefloat(string) = string ke number pecahan
// // number(string) = number ke string | number.tostring() = number ke string

// let number = h.toString();
// document.writeln(number);

// let number2 = "9.9";
// let number3 = parseInt(number2);
// document.writeln(number3);
// const number4 = 4;
// document.writeln(number4.toString() + number3);

// // Nan = not a number  isNaN()| Infinity = infinity

// // array = [element1, element2, element3] | array[index] = element ke index
// let array = [1, "2", 3, false]
// array.push(4);
// array.push(5);
// document.writeln(`${array}`);
// // array.pop() = menghapus element terakhir | array.push() = menambah element terakhir | 
// // array.length = panjang array | array.splice(index, jumlah) = menghapus element ke index sebanyak jumlah
// // array[index] = value : menghapus data di posisi index | delete array [index] : menghapus data di posisi index
// // array.shift() = menghapus element pertama | array.unshift() = menambah element pertama

// // tipe data objek : properti{key1: value1, key2: value2} | objek.key = value | objek["key"] = value | mengubah index number ke key string
// let objek = {nama: "budi", umur: 20, lulus: true};


// // if expression | if (condition) {statement} else {statement}

// // let nilai = 13;
// // if (nilai >= 75) {
// //     console.log("lulus");
// // } 
// // else if (nilai < 25){
// //     console.error("gagal");
// // }else {
// //     console.warn("tidak lulus");
// // } 


// // pop up box : alert, confirm, prompt

// // const nama = prompt("siapa kamu?");
// // alert(`halo ${nama}`);
// // let nilai = prompt("masukkan nilai");
// // if (nilai >= 80){
// //     alert("lulus");
// //     console.log("lulus");
// // }
// // else if (nilai < 80){
// //     alert("remedial");
// //     console.warn("remedial")
// // }
// // else {
// //     alert("gagal");
// //     console.error("gagal");
// // }

// // confirm("apakah kamu yakin?");

// // undifined = tidak ada value(default dari js ) | null = tidak ada value | NaN = not a number | Infinity = infinity

// // switch case : switch (expression) {case value: statement break; default: statement}

// // let nilai = 80;

// // switch (nilai) {
// //     case 80:
// //         console.log("A");
// //         break;
// //     case 70:
// //         console.log("B");
// //         break;
// //     case 60:
// //         console.log("C");
// //         break;
// //     default:
// //         console.log("D");
// //         break;
// // }

// // operator typeof : typeof(value) = mengetahui tipe data | 

// let data = true;

// // if (typeof(data)=== "number"){
// //     console.log("number");
// // } else if  (typeof(data)=== "string"){
// //     console.log("string");
// // } else {
// //     console.log("undefined");
// // }

// // in operator : key in object = mengecek key di object

// // let obj = {nama: "budi", umur: 20, lulus: true};
// // if ("nama" in obj)
// // {
// //     console.log("ada");
// // } else {
// //     console.log("tidak ada");
// // }

// // ternary operator : condition ? statement1 : statement2

let nilai2 = 80;
let ucapan = nilai2 >= 73 ? "lulus" : "tidak lulus";
document.writeln(`<p>${ucapan}</p>`);

// nullish coalescing operator : a ?? b = a jika a tidak null/undefined, b jika a null/undefined

let data;
let data2 = data ?? "dua";
document.writeln(`<P>${data2}</p>`);

// optinonal chaining : objek?.key = value | objek?.key?.key2 = value

const objek = {biodata : {nama :"budi", umur: 20}};
let nama = objek?.biodata?.nama;
let umur = objek?.biodata?.umur;
document.writeln(`<p>${nama} & ${umur}</p>`);

// data falsy : false, 0, "", null, undefined, NaN, '',`` | data truthy : selain data falsy

let data3 = 0;

if (data3){
    console.log("truthy");
} else {
    console.log("falsy");
}

// operator logika non boolean : &&=and(mengambil yang pertama falsy), ||=or(mengambil yang pertama truthy), !=not

console.log(0 || "0")
console.log(null || undefined)
document.writeln(0 || null)
console.warn(null && "nol")

// for loop : for (statement1; statement2; statement3) {statement}

for (let i = 0; i <= 5 ; i++){
    document.writeln(`${i}`);
}

// while loop : while (condition) {statement}

let i = 6;
while (i <= 10){
    document.writeln(`${i}`);
    i++;
}

// do while loop : do {statement} while (condition)

let j = 11;

do {
    document.writeln(`${j}`);
    j++;
}
while (j <= 15);

// break = menghentikan loop | continue = melanjutkan loop

for (let i = 0; i <= 10; i++){
    if (i === 5){
        break;
    }
    document.writeln(`${i}`);
}

for (let i = 0; i <= 10; i++){
    if (i === 5){
        continue;
    }
    document.writeln(`${i}`);
}

// label : label: statement | break label = menghentikan loop dengan label

outer: for (let i = 0; i <= 5; i++){
    inner: for (let j = 0; j <= 5; j++){
        if (j === 3){
            continue outer;
        }
        document.writeln(`${j}`);
    }
}

// perulangan for in : for (key in object) {statement} | mengambil key dari object

let person = {nama: "budi", umur: 20, lulus: true};

for (let key in person){
    document.writeln(`<p>${key} : ${person[key]}</p>`);
}

// perulangan for of : for (value of array) {statement} | mengambil value dari array

let array = [1, 2, 3, 4, 5];   
  for (let value of array){
        document.writeln(`${value}`);
 }

//  with statement : with (object) {statement} | tidak disarankan

let obj = {nama: "budi", umur: 20, lulus: true};

with (obj){
    document.writeln(`<br>${nama} ${umur} ${lulus}`);
}

// function : function name(parameter) {statement}

function sayHello(){
    document.writeln("<br>hello");
}

sayHello();

// function parameter : function name(parameter1, parameter2) {statement}

function namaSaya(nama, umur){
    document.writeln(`<br>${nama} ${umur}`);
}

namaSaya("budi", 20);
namaSaya("andi", 30);

// function return : function name(parameter) {return value}

function tambah(a, b){
    return a + b;
}

let hasil = tambah(2, 3);
document.writeln(`<br>${hasil}`);

// optional parameter : function name(parameter1, parameter2 = value) {statement}

function biodata(nama, umur){
    document.writeln(`<br>${nama} ${umur}`);
}

biodata("budi");

// default parameter : function name(parameter1, parameter2 = value) {statement}

function biodata2(nama, umur = 20){
    document.writeln(`<br>${nama} ${umur}`);
}

biodata2("andi");

// rest parameter : function name(...parameter) {statement}

function biodata3(...nama){
    document.writeln(`<br>${nama}`);
}

biodata3("budi", "andi", "cindy");

// function sebagai value : const name = function() {statement}

function say(nama){
    document.writeln(`<br>hello${nama}`);
}
say("budi");
const say2 = say;  
say2("kami");

// anonymous function : const name = function() {statement}

const say3 = function(nama){
    document.writeln(`<br>hello${nama}`);
}
say3("budi");

// function dalam function : function name() {function name2() {statement}}

function say4(){
    function say5(){
        document.writeln("<br>hello");
    }
    say5();
}

// scope : global scope = diluar function | local scope = didalam function

let global = "global";

function scope(){
    let local = "local";
    document.writeln(`<br>${global}`);
    document.writeln(`<br>${local}`);
}

scope();

// recursive function : function name() {name()} | function name(parameter) {name(parameter)}

function faktorial(n){
    if (n === 0){
        return 1;
    }
    return n * faktorial(n - 1); // 3 * 2 * 1
}

document.writeln(`<br>${faktorial(3)}`);

// funcion generator : function* name() {yield value}


function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

let gen = generator();
document.writeln(`<br>${gen.next().value}`);
function* angkaGenap(angka){
    for (let i = 0; i <= angka; i++){
        if (i % 2 === 0 ){
            yield i;
        }
    }
}

let genap = angkaGenap(4);
for (let value of genap){
    document.writeln(`<br>${value}`);
}
// arrow function : const name = (parameter) => {statement}

const say6 = (nama) => document.writeln(`<br>hello${nama}`);
say6("budi");

// closure : function dalam function | function name() {function name2() {statement}}

function parent(){  
    let nama = "budi";
    function child(){
        document.writeln(`<br>${nama}`);
    }
    return child;
}

let child = parent();
child();

// object method : object = {key: value, key2: function() {statement}} | object.key()

let objek2 = {
    nama: "budi",
    umur: 20,
    sayHello: function(){
        document.writeln(`<br>hello`);
    }
}

objek2.sayHello();

// this : object = {key: value, key2: function() {statement}} | object.key()

let objek3 = {
    nama: "budi",
    umur: 20,
    sayHello: function(){
        document.writeln(`<br>hello saya ${this.nama}`);
    }
}

objek3.sayHello();

// arrow function in object : object = {key: value, key2: () => {statement}} | object.key()

let objek4 = {
    nama: "budi",
    umur: 20,
    sayHello: () => document.writeln(`<br>hello saya ${this.nama}`)
}



// getter setter : object = {get key() {statement}, set key(value) {statement}} | object.key

let objek5 = {
    nama: "budi",
    umur: 20,
    get biodata(){
        return `${this.nama} ${this.umur}`;
    },
    set biodata(value){
        let data = value.split(" ");
        this.nama = data[0];
        this.umur = data[1];
    }
}

objek5.biodata = "andi 30";
document.writeln(`<br>${objek5.biodata}`);

// destructuring object : const {key, key2} = object | const {key: key2, key2: key3} = object

let objek6 = {
    namaObjek: "budi",
    umurObjek: 20
};

let {namaObjek, umurObjek} = objek6;
document.writeln(`<br>${namaObjek} ${umurObjek}`);

// strict mode : "use strict" bisa dibuat di awal file atau function| menghindari error

// debug : debugger = menampilkan debug di console
// console.log("debug"); | debugger;

// dalam function variavel di sebut parameter, di luar function disebut argument

// ketika ingin memanggil function maka harus menggunakn () | jika tidak maka akan memanggil function itu sendiri