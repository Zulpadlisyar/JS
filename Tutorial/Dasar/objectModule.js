'use strict';

let nama = "Sauqi";
class Barang{
    constructor(barang) {
        this.barang = barang;
    }

    tanggalBarang(tanggal){
        console.info(`${this.barang} kadaluarsa tanggal ${tanggal}`)
    }
}

function hello(){
    console.info(`Hello from eko`)
}

export {nama, Barang, hello}