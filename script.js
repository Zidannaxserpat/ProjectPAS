function ATM(){
  let wadahAkun = [];
  let transaksi = [];

  // Fungsi untuk mengecek login
  function cekLogin() {
    let akun = {
      username: prompt('Masukkan username:'),
      pin: prompt('Masukkan PIN (harus angka):'),
    };

    // Cek apa ada username dan PIN di dalam array
    let akunDitemukan = wadahAkun.some(existingAkun => existingAkun.username === akun.username && existingAkun.pin === akun.pin);

    if (akunDitemukan) {
      let userAccount = wadahAkun.find(existingAkun => existingAkun.username === akun.username);
      alert('Login berhasil!');

      let konfirmasi = prompt('Mau ambil uang? apa mau isi saldo? atau cek saldo? atau lihat transaksi terakhir? atau logout? (narik / isi / cek / transaksi / logout)');

      while (konfirmasi === 'narik' || konfirmasi === 'isi' || konfirmasi === 'cek' || konfirmasi === 'transaksi' || konfirmasi === 'logout') {
        if (konfirmasi === 'narik') {
          // Narik uang
          let narik = parseInt(prompt('Mau narik berapa?'));

          if (isNaN(narik) || narik < 5000) {
            alert('Masukkan jumlah penarikan yang valid (minimal Rp5000).');
          } else if (narik > userAccount.saldo) {
            alert('Saldo tidak mencukupi.');
          } else {
            userAccount.saldo -= narik;
            transaksi.push(`${userAccount.username} melakukan penarikan uang Rp${narik}`);
            alert(`Penarikan uang Rp${narik} berhasil, saldo anda sisa ${userAccount.saldo}`);
          }
        } else if (konfirmasi === 'isi') {
          // Isi saldo
          let isi = parseInt(prompt('Mau isi berapa?'));

          if (isNaN(isi) || isi < 10000) {
            alert('Masukkan jumlah isi saldo yang valid (minimal Rp10000).');
          } else {
            userAccount.saldo += isi;
            transaksi.push(`${userAccount.username} melakukan pengisian saldo sebesar Rp${isi}`);
            alert(`Pengisian saldo sebesar Rp${isi} berhasil!`);
          }
        } else if (konfirmasi === 'cek') {
          // Cek saldo
          alert(`Jumlah saldo anda sekarang adalah Rp${userAccount.saldo}`);
        } else if (konfirmasi === 'transaksi') {
          // Tampilin riwayat transaksi
          if (transaksi.length === 0) {
            alert('Belum ada transaksi.');
          } else {
            alert('Riwayat Transaksi:\n' + transaksi.join('\n'));
          }
        } else if (konfirmasi === 'logout') {
          alert('Logout berhasil.');
          return; // Keluar dari fungsi dan membiarkan pengguna login atau buat akun lagi
        }

        konfirmasi = prompt('Mau ambil uang? apa mau isi saldo? atau cek saldo? atau lihat transaksi terakhir? atau logout? (narik / isi / cek / transaksi / logout)');
      }

      return true; // Program selesai
    } else {
      alert('Login gagal. Nama pengguna atau kata sandi salah.');

      // Menawarkan pilihan untuk membuat akun atau login ulang
      let opsi = prompt('Pilih tindakan:\n1. Login ulang\n2. Buat akun');

      if (opsi === '1') {
        cekLogin(); // Login ulang
      } else if (opsi === '2') {
        // Membuat akun baru
        let saldoAwal = parseInt(prompt('Masukkan saldo awal (harus angka):'));
        let akunBaru = {
          username: prompt('Masukkan username baru:'),
          pin: prompt('Masukkan PIN baru (harus angka):'),
          saldo: saldoAwal || 0,
        };
        wadahAkun.push(akunBaru);
        alert('Akun berhasil ditambahkan!');
      } else {
        alert('Pilihan tidak valid. Keluar dari program.');
      }
    }
  }

  // Loop untuk memilih mau login apa buat akun
  while (true) {
    let pilihan = prompt('Pilih tindakan:\n1. Login\n2. Buat akun\n3. Keluar');

    if (pilihan === '1') {
      cekLogin();
    } else if (pilihan === '2') {
      let saldoAwal = parseInt(prompt('Masukkan saldo awal:'));
      let akunBaru = {
        username: prompt('Masukkan username baru:'),
        pin: prompt('Masukkan PIN baru (harus angka):'),
        saldo: saldoAwal || 0,
      };
      wadahAkun.push(akunBaru);
      alert('Akun berhasil ditambahkan!');
    } else if (pilihan === '3') {
      confirm = parseInt(prompt("Pilih program:\n1. ATM\n2. Game tebak angka\n3. Ganjil / genap\n4. Suwit\n0. Keluar"));
      loop();

      if(confirm == 0) {
        break;
      }
    } else {
      alert('Pilihan tidak valid. Silakan pilih lagi.');
    }
  }
}

function tebakAngka() {
  let chance = 3;
  let c = Math.floor(Math.random() * 10) + 1;
  let hasil = '';

  while (chance >= 1) {
    alert("Memulai permainan dengan " + chance + " kesempatan");
    let p = parseInt(prompt("Tebak angka 1-10"));
    if (p === c) {
      hasil = 'BENAR';
      alert('Anda ' + hasil + ' angka yang anda tebak adalah ' + c);
      break;  
    } else if (p < c) {
      hasil = 'RENDAH';
      chance -= 1;
      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + chance + ' kesempatan lagi.');
    } else if (p > c) {
      hasil = 'TINGGI'; 
      chance -= 1;
      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + chance + ' kesempatan lagi.');
    }

    if (chance === 0) {
      alert('Anda gagal, angka yang benar adalah ' + c);
    }
  }  
  alert("Oke makasih udah main");
  confirm = parseInt(prompt("Pilih program:\n\n1. ATM\n2. Game tebak angka\n3. Ganjil / genap\n4. Suwit\n0. Keluar"));
}

function ganjilGenap() {
  let angka = parseInt(prompt("Masukkan angka"));
        
  (angka % 2 == 0) ? alert("Anda memasukkan angka Genap!") : alert("Anda memasukkan angka ganjil!");
  confirm = parseInt(prompt("Pilih program:\n1. ATM\n2. Game tebak angka\n3. Ganjil / genap\n4. Suwit\n0. Keluar"));
}

function Suwit() {
  while(true) {

    let playerInput = prompt("Pilih batu, gunting, kertas / keluar:");
    let player = playerInput.toLowerCase(); // Convert input to lowercase
    let bot = Math.random();
        
    if(bot < 0.34){
      bot = 'batu';
    }else if(bot > 0.33 && bot <= 0.66){
      bot = 'gunting';
    }else{
      bot = 'kertas';
    }
        
    let hasil;
        
    if(player == bot){
      hasil = 'Hasil permainan seri';
    }else if(bot == 'kertas'){
      if(player == 'gunting'){
        hasil = 'Anda Menang';
      }else if(player == 'batu'){
         hasil = 'Anda kalah';
      }else if(player == "keluar") {
        confirm = parseInt(prompt("Pilih program:\n1. ATM\n2. Game tebak angka\n3. Ganjil / genap\n4. Suwit\n0. Keluar"));
        loop();
        
        if(confirm == 0) {
          break;
        }
      }else{
        alert("Salah input!")
        loop();
      }
    }else if(bot == 'batu'){
      if(player == 'gunting'){
        hasil = 'Anda kalah';
      }else if(player == 'kertas'){
        hasil = 'Anda Menang';
      }else if(player == "keluar") {
        confirm = parseInt(prompt("Pilih program:\n1. ATM\n2. Game tebak angka\n3. Ganjil / genap\n4. Suwit\n0. Keluar"));
        loop();
        
        if(confirm == 0) {
          break;
        }
      }else{
        alert("Salah input!")
        loop();
      }
    }else if(bot == 'gunting'){
      if(player == 'batu'){
        hasil = 'Anda Menang';
      }else if(player == 'kertas'){
        hasil = 'Anda kalah';
      }else if(player == "keluar") {
        confirm = parseInt(prompt("Pilih program:\n1. ATM\n2. Game tebak angka\n3. Ganjil / genap\n4. Suwit\n0. Keluar"));
        loop();
        
        if(confirm == 0) {
          break;
        }
      }else{
        alert("Salah input!")
        loop();
      }
    }  
    alert("Bot memilih "+bot+" sedangkan kamu milih "+player+" hasil permainan: "+hasil);
  }
}

let confirm = parseInt(prompt("Pilih program:\n1. ATM\n2. Game tebak angka\n3. Ganjil / genap\n4. Suwit\n0. Keluar"));

function loop() {
  while(confirm == 1 || confirm == 2 || confirm == 3 || confirm == 4 || confirm == 0) {
    if(confirm == 1) {
      ATM();
    }else if(confirm == 2) {
      tebakAngka();
    }else if(confirm == 3) {
      ganjilGenap();
    }else if(confirm == 4) {
      Suwit();
    }else if(confirm == 0) {
      break;
    }
  }
}

loop();
