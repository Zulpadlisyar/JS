'use strict';

// oop :object oriented programming | pemrograman berorientasi objek

// objek :kumpulan data dan yang berisi properti dan method atau function yang berfungsi untuk memanipulasi data

// class :blueprint atau cetakan objek

// constructor function :fungsi yang digunakan untuk membuat objek (Gunakan huruf kapital di setiap kata fungsi)
// property constructor
function Person(){
    this.firstName = ""
}

const person1 = new Person();
person1.firstName = "John";
person1.lastName = "Doe";
person1.fullName = `${person1.firstName} ${person1.lastName}`;

const person2 = new Person('Doe');
person2.firstName = "Doe";
person2.lastName = "John";
console.log(person1);
console.log(person2);
person2.fullName = `${person1.firstName} ${person1.lastName}`;


// method constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person1);
console.log(person2);

// parameter constructor
function Nama(namaDepan, namaBelakang){
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;
    this.namaLengkap = function(){
        document.writeln(`Nama Lengkap : ${this.namaDepan} ${this.namaBelakang}<br>`);
    }
}

let orang1 = new Nama("Ahmad", "Fauzi");
orang1.namaLengkap();

let orang2 = new Nama("Budi", "Santoso");
orang2.namaLengkap();

// inheritance constructor
function Biodata(nama,umur){
    this.nama = nama;
    this.umur = umur;
    this.tampil = function(){
        document.writeln(`Nama : ${this.nama}<br>`);
        document.writeln(`Umur : ${this.umur}<br>`);
    }
}

function Alamat(nama,umur,alamat){
    Biodata.call(this,nama,umur);
    this.alamat = alamat;
    this.tampilAlamat = function(){
        this.tampil();
        document.writeln(`Alamat : ${this.alamat}<br>`);
    }
}

let orang3 = new Alamat("Ahmad Fauzi", 20, "Jl. Jendral Sudirman No. 1");
orang3.tampilAlamat();
let orang4 = new
Alamat("Budi Santoso", 25, "Jl. Jendral Sudirman No. 2");
orang4.tampilAlamat();

// prototype :membuat method atau properti yang bisa digunakan oleh semua objek | membuat method atau properti yang bisa digunakan oleh semua objek

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.sayHello = function(){
    console.log("Hello")
}

let eko = new Person("Eko", "Budi")

console.log(eko);
eko.sayHello();


// class 

    class Orang {

    }

// constructor class

class Orang1 {
    constructor (name) {
        console.log(`Halo saya ${name}`);
    }
    
}

let deni = new Orang1("deni")

// new digunakan untuk membuat instance dari sebuah class. Tanpa new, JavaScript tidak akan tahu bahwa kita ingin membuat objek baru dari class tersebut.

// property class

class Orang2 {
    constructor (name2) {
        this.name = name2;
    }
}

const riko = new Orang2("riko")
console.log(riko);
console.log(riko.name);

// method class

class Orang3 {
    constructor(name3){
        this.name = name3;
    }

    sayBye(name3){
        console.log(`Hello ${name3} kamu ${this.name}`);
    }
}

const riko1 = new Orang3 ("riko1");
console.log(riko1);
riko1.sayBye("bud")

// class inheritance

class Employee {
    sayGood(name4){
        console.log(`hello ${name4} saya employee ${this.name4}`)
    }
}

class Manager extends Employee {
    sayGood(name4) {
        console.log(`hello${name4} saya manager ${this.name4}`)
    }
}

const budi1 = new Employee ();
budi1.name4 = "Budi1";
budi1.sayGood("joko")

const budi2 = new Manager ();
budi2.name4 = "Budi1";
budi2.sayGood("joko");

// super constructor

class Employee1{
    constructor (name5){
        this.name5 = name5; 
    }

    sayHello1(name5){
        console.log(`saya ${name5} dan kariawan dari ${this.name5}`)
    }
}

class Manager1 extends Employee {
    constructor(name5, name6) {
        super(name5);
        this.name5 = name5;
    }

    sayHello1(name5){
        console.log(`saya ${name5} dan manager dari ${this.name5}`)
    }
}

const budi3 = new Employee1 ("budi2");
budi3.sayHello1("joko")

const budi4 = new Manager1 ("budi4");
budi4.sayHello1("riko")

// super method

class Shape {
    paint(){
        console.log("paint Shape");
    }
}

class Circle extends Shape {
    paint(){
        super.paint()
        console.log("Paint Circle");
    }
}

const circle = new Circle();
circle.paint()

// getter dan setter
class Buku{
    constructor(namaBuku, penerbit){
        this.namaBuku = namaBuku;
        this.penerbit = penerbit;
    }

    get bukuLengkap(){
        return (`${this.namaBuku} dan ${this.penerbit}`)
    }

    set bukuLengkap(isi){
        const hasil = isi.split(",")
        this.namaBuku = hasil[0];
        this.penerbit = hasil[1];
    }
}

const buku1 = new Buku("Laskar Pelangi", "Andrea H");
console.log(buku1);
console.log(buku1.bukuLengkap);
buku1.bukuLengkap = "Atomic Habit, James C";
console.log(buku1.bukuLengkap);
buku1.bukuLengkap = "Bulan, Tere L";
console.log(buku1.bukuLengkap);

// public class field

class Olahraga {
    nama;
    jenis;
    skor = 100;

    constructor(nama, jenis){
        this.nama = nama;
        this.jenis = jenis;
    }
}

const sepakBola = new Olahraga("Sepak bola", "bola besar");
console.log(sepakBola);
const Badminton = new Olahraga("Badminton", "Bola kecil");
console.log(Badminton);

// private class field | menggunkan # diawal class

// class Counter {
//     #counter = 0;

//     increment(){
//         this.#counter++;
//     }

//     decrement(){
//         this.#counter--;
//     }

//     get(){
//         return this.#counter;
//     }
// }
// const counter = new Counter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.get());

// private method | gunakan # diawal method

class Person5 {
    say(name7){
        if(name7){
            this.#sayWithName(name7);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithName(name7){
        console.log(`Hello ${name7}`);
    }

    #sayWithoutName(){
        console.log("Hello")
    }
}

const happy = new Person5();
happy.say("happy")

// operator instanceof | output boolean

class Pegawai {

}

class Boss extends Pegawai{


}

const akbar = new Pegawai();
const barsi = new Boss();

console.log(akbar instanceof Pegawai);
console.log(barsi instanceof Boss);
console.log(barsi instanceof Pegawai);
console.log(akbar instanceof Boss);

// static class field 

class Configuration {
    static nameFile = "nisbfasjd";
    static version = "1.0";
    static author = "poi";
}


console.log(Configuration.nameFile );
console.log(Configuration.version);
console.log(Configuration.author);

// static method

// class MathUtil {
//     static sum(...numbers){
//         let total = 0;
//         for (const number of numbers) {
//             total += number;
//         }
//         return total
//     }
// }

// const result = MathUtil.sum(1,2,3,3);
// console.log(result);

// error

class MathUtil {
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error("Total paramete haru lebih 0");
            
        }
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total
    }
}

const result = MathUtil.sum(1,2,3,3);
console.log(result);

// console.info(MathUtil.sum());

// error handling | kalau error akan tetap melanjutkan program

try {
    console.info(MathUtil.sum());
    console.info("berhasil");
} catch (error) {
    console.info(`terjadi error : ${error.message}`)
    
} finally {
    console.log("program selesai") // finally keyword
}

console.log("bidi");

// membuat class error manual

class ValidatonError extends Error {
    constructor (message, field) {        
        super(message);
        this.field = field;
    }
}

// iterable dan iterator

class ConuterIteratorResult {
    constructor(value, done) {
        this.value = value;
        this.done = done;
    }
} // kontrak iterator result

class CounterIterator {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    next() {
        try{
            if(this.value > this.max){
                return new ConuterIteratorResult(this.value, true);
            }else {
                return new ConuterIteratorResult(this.value, false);

            }
        }
        finally{
                this.value++;
        }
    }
} //kontrak iterator

class Counter {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }
    [Symbol.iterator](){
        return new CounterIterator(this.value, this.max);
    }
}// kontrak iterable

const counter1 = new Counter(1,10);
for (const value of counter1){
    console.log(value);
}