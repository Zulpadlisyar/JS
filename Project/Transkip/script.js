// Cek dukungan browser
if (!('webkitSpeechRecognition' in window)) {
    alert('Browser Anda tidak mendukung Web Speech API. Silakan gunakan Chrome.');
  } else {
    // Inisialisasi SpeechRecognition
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Transkripsi berlanjut sampai dihentikan
    recognition.interimResults = true; // Menampilkan hasil sementara
    recognition.lang = 'id-ID'; // Set bahasa (contoh: Bahasa Indonesia)
  
    // Elemen DOM
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const outputDiv = document.getElementById('output');
  
    // Mulai transkripsi
    startBtn.addEventListener('click', () => {
      recognition.start();
      startBtn.disabled = true;
      stopBtn.disabled = false;
      outputDiv.textContent = 'Mendengarkan...';
    });
  
    // Hentikan transkripsi
    stopBtn.addEventListener('click', () => {
      recognition.stop();
      startBtn.disabled = false;
      stopBtn.disabled = true;
      outputDiv.textContent += '\nTranskripsi dihentikan.';
    });
  
    // Hasil transkripsi
    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      outputDiv.textContent = transcript;
    };
  
    // Handle error
    recognition.onerror = (event) => {
      console.error('Error:', event.error);
      outputDiv.textContent = 'Terjadi error: ' + event.error;
    };
  
    // Transkripsi selesai
    recognition.onend = () => {
      startBtn.disabled = false;
      stopBtn.disabled = true;
      outputDiv.textContent += '\nTranskripsi selesai.';
    };
  }