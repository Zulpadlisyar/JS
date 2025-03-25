// async => eksekusi kode secara langsung(non-blocking)
// callback => memanggil kembali kode dari async {biasanya bentuk function}

const addElement = () => {
    const header = document.createElement("h1");
    header.textContent = "Program";

    document.body.appendChild(header);
}

// setTimeout(addElement, 5000);

const addTime = () => {
    // Membuat elemen <p>
    const time = document.createElement("p");
    
    // Menetapkan teks ke elemen <p> dengan tanggal dan waktu saat ini
    time.textContent = new Date().toString();

    // Menambahkan elemen <p> ke body
    document.body.appendChild(time);
}

// Memanggil fungsi addTime setiap 3 detik
// setInterval(addTime, 3000);


// ajax(async javascript dan xml)

const ajax = new XMLHttpRequest();
ajax.open('GET', 'hello.json');

ajax.send();

// fetch('hello.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error fetching JSON:', error));


// fetch api(pengganti ajax)

// saat emmbuat request perlu membuat obj req dulu