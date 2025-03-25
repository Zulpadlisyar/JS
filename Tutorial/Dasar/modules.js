"use strict"

// modelus : fitur yang dapat membuat modul yang bisa digunakan ulang
// import => mengambil sesuatu dari modul dan export => mengeluarkan sesuatu dari modul
// saat mengggunkan modules disarankan menjalankan kode dalam web server
// saat menggunakan modules dapat selektif dalam expose kode yang diinginkan 

// membuat modules | file yang digunakan ketika module (.mjs)
// ketika menggunakan module tambahkan type:module di file html


export function sayHello(name) {
    console.info(`Hallo ${name}`);
}

export function sayBye(name) {
    console.info(`Bye ${name}`);
}

export let name = "Zul";

// export => kata kunci expose, ditambahkan di awal funtion, class, variabel

// import => ketika kode sudah di export maka harus diimport agaar kode dapat dijalankan
// kata kunci => import{namaFuntion,Variabel,Class}from"lokasi-module.js}

// variabel di module | daapt menjadi global scope dan akan jika variabel sama akan menimpa var yang lama

// export multiple => {namaVariabel, namaFunction, namaClass} 
// contoh : export{sayHello, sayBye, name}

// alias => jika ada nama var,func,class yang sama. dapat dirubah dangan alias tanpa mengubah var,func,class di file awal | gunakan kata kunci (as) 
// lebih baik digunakan ketika import dan hanya terdapat di file import

class Olahraga{
    constructor (jenis) {    
        this.jenis = jenis;
    }

    sayOlahraga(nama) {
        console.info(`ini ${this.jenis} dari ${nama}`)
    }
}

class HariBulan {
    constructor (nama) {
        this.nama = nama;
    }

    sayBulan(bulan) {
        console.info(`hari ini ${this.nama} dan bulan ${bulan}`);
    }
}

export {HariBulan, Olahraga}

// class HariBulan {   
//     constructor (nama) {
//         this.nama = nama;
//     }

//     sayBulan(bulan) {
//         console.info(`hari ini ${this.nama} dan bulan ${bulan}`);
//     }
// }

// const hari = new HariBulan("Selasa");
// hari.sayBulan("Februari") || nama hari harus sama dengan nama variabel di const



// export default (export default) => ini digunakan untuk export tanpa nama var,func atau class lalu di import bisa bebas menggunakn nama untuk file yang diexport || dalam penggunaan defaultmodule boleh digabung dengan named modul namun hanya boleh satu defaultmodule * sebisa mungkin menggunkan named modules

// module object => object js yang berisi attribute yang di export
// (import * as variabel from "./")

// agregating modul => menyatukan beberapa modul (export {a,b,c} fron "./") || buat kumpulan modul di satu file lalu export ke file import

// dynamic module loading => jika module trlaulu banyak akan membuat berat

