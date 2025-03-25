'use strict';

// number
// konversi number ke string

const input = "12345";
const number = Number(input);
console.info(typeof input);
console.info(typeof number);
console.info(number);

// number static properties | max, main, dll

console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);


// number static method | .isnan(data), dll
let data = Number(123)
console.info(Number.isNaN(data));
console.info(Number.isInteger(data));

// number instance | .toLocalString(*kode string negara), dll

let value = Number(1230000);
console.info(value.toString(9));
console.info(value.toLocaleString("en-us"));


// string

// instance method string 

let nama = "Ahmad Darwish";

console.info(nama.length);
console.info(nama.toUpperCase());
console.info(nama.split(""));


// array

// instance method array

// array loop | for each

const array = ["Zulpaldi", "Syarif", "Harahap"];
array.forEach((value, index) => console.info(`${value}, ${index}`));
array.forEach((value => console.info(`${value}`)));

// array queue | first in first out (fifo)

let queue = ["satu", "dua", "tiga"];
console.info(queue)
queue.push("empat");
queue.shift();
console.info(queue);

// array stack | last in first out (lifo) 

let stack = ["satu", "dua", "tiga"];
console.info(stack);
console.info(stack.pop());

// array source 

let source = [1, 2, 3, 6, 7, 9];

console.info(source.find(value => value > 3));
console.info(source.indexOf(9));

// array filter

let filter = [1, 3, 4, ,5 ,6 ,9];

const ganjil = filter.filter(value => value % 2 === 1);
console.info(`Berikut ini bilangan ganjil ${ganjil }`);

// array transform | merubah array

let transform = ["Zulpadli", "Syarif", "Harahap"];
const namesUpper = transform.map(value => value.toUpperCase());
const namesLower = transform.map(value => value.toLowerCase());
console.info(namesUpper);
console.info(namesLower);

const namesReduce = transform.reduce((before, value) => before + "" + value);
console.info(namesReduce);

// object

// object freeze (tidak bisa mengubah value atau hapus attribute)
// object seal (bisa merubah value tapi tidak bisa menghapus atribut)

let person = {
    firstName : "Zulpadli",
    lastName : "Harahap"   
    // ini tipe data object
}

// Object.freeze(person);
Object.seal(person)
person.firstName = "Ahmad";


// person.firstName = "Ahmad";
// delete person.firstName // outputnya bakal readonly(errror)

console.info(person);

// object assign  | tujuan akan mengcopy seluruh atribut yang berada di asal


let tujuan = {
    firstName : "Zulpadli",
    lastName : "Harahap"
}

let asal = {
    middleName : "Syarif"
}

Object.assign(tujuan, asal);
console.info(tujuan);

// object value dan property name

const orang = {
    namaDepan : "Budi",
    namaBelakang : "Akhyar"
}

console.info(Object.values(orang));
console.info(Object.getOwnPropertyNames(orang));

// Json (javascript object notation) | data string yang mirip dengan object | alat komunikasi untuk server dan client

// JSON.stringify() konversi object/array ke string json
// JSON.parse() konversi string json ke object

// nested object
// const orang = {
//     namaDepan : "Budi",
//     namaBelakang : "Akhyar",
//     alamat : {
//         jalan : "skdbfjkd",
//         nomor : "23"
//     }
// }

// BIG integer(bilangan bulat dalam number) | tanda dalam print kalau itu bigint terdapat n di akhir  

let a = BigInt(Number.MAX_SAFE_INTEGER);
let b = BigInt(Number.MAX_SAFE_INTEGER);

const c = a + b;
console.info(c);
console.info(typeof c)

// date(representasi waktu dan tanggal)

const date = new Date();
console.info(date);
// console.info(date.getTime())
console.info(date.toLocaleString("id-ID"));

// parsing date (mengubah string ke date)| Date.parse()

// date getter dan setter | .getFullYear() & .set()

// math (class yang berisi staic property dan method operasi matematika)

console.info(Math.max(2, 8))

// Boolean (konveri boolean ke string dan sebaliknya)

let boolean = Boolean (true);

console.log(boolean);
let string = console.log(boolean.toString());

// map 

const map = new Map();
map.set("Name", "Kurniawan");

console.info(map);

console.info(typeof map);

// set (implemntasi struktur data yang berisikan data uniq)

let set = new Set();

set.add("eko");
set.add("eko");
set.add("kurniawan");

console.info(set);
set.forEach((value) => console.info(value));

// symbol (tipe data yang selalu uniq walaupun valuenya sama)

let firstName = Symbol("firstName");
let lastName = Symbol();

let person1 = {}
    person1[firstName] = "Eko"
    person1[lastName] = 1

console.info(typeof lastName)
console.info(person1)

// symbol for (akan mengeluarkan symbol yangsama(tidak uniq))

let person2 = {}
    person2[Symbol.for("firstName")] = "Eko"
    person2[Symbol.for("lastName")] = "Budi"

console.info(person2)
console.info(person2[Symbol.for("firstName")])

// RegExp(regular expression) | fitur mencari text dengan pola (sensitif terhadap perbedaan)


// cara membuat regex
// let regex1 = /[a]/;
// let regex2 = new RegExp("eko");
// let regex3 = new RegExp(/eko/);

let regex1 = "oafhgora ajkaksr";
const regex = /[a]/;

let result = regex.exec(regex1);
console.info(result); // string

let test = regex.test(regex1);
console.info(test); // boolean

// regex modifier (agar tidak sensitif terhadap perbedaan) | i, g, m

// let regex1 = /[a]/i;

// proxy (penghubung dari sebuah data)
// proxy handler | new Proxy()

const target = {};

const handler = {
    get: function (target, property) {
        return target[property];
    },
    set: function (target, property, value) {
        target[property] = value;
        return true;
    },
    deleteProperty: function (target, property) {
        if (property in target) {
            console.log(`Menghapus properti "${property}"`);
            delete target[property];
            return true;
        } else {
            console.warn(`Properti "${property}" tidak ditemukan.`);
            return false;
        }
    }
};

const proxy = new Proxy(target, handler);

proxy.first = "Eko";
proxy.lastName = "Kun";

delete proxy.first; // Berhasil

console.info(target);

// reflrct (class yang digunakan mengeksekusi javascript function)

const person4 = {};

Reflect.set(person4, "firstname", 'eko');
Reflect.set(person4, "lastname", "khoir" );

console.info(person4);

console.info(Reflect.has(person,"firstNane"))

// encode (ketika menambahkan uri dapat menambahkan seperti query)

const url = "https://ajkdfba ddn";
console.info(url)

const encode = encodeURI(url);
console.info(encode);

const decode = decodeURI(url);
console.info(decode)

// encode & decode component

const urlcomp = "https://ajkdfba ddn";
const valuecomp= "https://youtube.com";

const encodecomp = encodeURIComponent(valuecomp);
console.info(urlcomp + valuecomp);

// base 64 (binary to text encoding) | btoa(value) : encode value ke base 64 | atob(encoded) : decode base64 ke value

const original = "Zulpadli=Syarif&Harahap";
console.info(original);

const enbtoa = btoa(original);
console.info(enbtoa);

const debtoa = atob(enbtoa);
console.info(debtoa);

// eval (function untuk mengeksekusi kode js dari string) !! hati-hati dalm penggunaan terkait keamanan (tidak rekomendasi

// let hack = "alert(akun anda di hack)";
// eval(hack)


export class HariTahun {
    constructor(bulan) {
        this.bulan = bulan;
    }

    sayTahun(tahun){
        console.info(`Ini bulan ${this.bulan} dan tahun ${tahun}`)
    }
}




 