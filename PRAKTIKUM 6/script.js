// ==========================================
// LATIHAN 1 & 2: Manipulasi Teks & Event Click
// ==========================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

const tombolAksi = document.getElementById("tombolAksi");
tombolAksi.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});


// ==========================================
// LATIHAN 3: Mengubah Kelas & Gaya CSS
// ==========================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});


// ==========================================
// LATIHAN 4: Event Input & Penghitung Karakter
// ==========================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});


// ==========================================
// LATIHAN 5: Validasi Form Pendaftaran
// ==========================================
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

formPendaftaran.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        formPendaftaran.reset();
    }
});


// ==========================================
// LATIHAN 6: Daftar Tugas Sederhana (To-do List)
// ==========================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    
    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai") ? "Batalkan selesai" : "Tandai selesai";
    });

    item.append(label, selesai);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});


// ==========================================
// MINI PROJECT: Form Pendaftaran Workshop
// ==========================================
const formWorkshop = document.getElementById("formWorkshop");
const wsNama = document.getElementById("wsNama");
const wsEmail = document.getElementById("wsEmail");
const wsSesi = document.getElementById("wsSesi");
const infoSesi = document.getElementById("infoSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const btnResetWs = document.getElementById("btnResetWs");

// Fitur Interaktif 1: Event change untuk dropdown sesi
wsSesi.addEventListener("change", function () {
    infoSesi.textContent = wsSesi.value ? wsSesi.value : "-";
});

// Fitur Interaktif 2: Validasi & Submit
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();
    const namaVal = wsNama.value.trim();
    const emailVal = wsEmail.value.trim();
    const sesiVal = wsSesi.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (namaVal.length < 3) {
        pesanWorkshop.textContent = "Nama minimal harus terdiri dari 3 karakter.";
    } else if (!polaEmail.test(emailVal)) {
        pesanWorkshop.textContent = "Format email workshop tidak valid.";
    } else if (sesiVal === "") {
        pesanWorkshop.textContent = "Silakan pilih sesi workshop terlebih dahulu.";
    } else {
        pesanWorkshop.textContent = "Pendaftaran workshop berhasil! Terima kasih.";
        formWorkshop.reset();
        infoSesi.textContent = "-";
    }
});

// Fitur Interaktif 3: Tombol reset manual
btnResetWs.addEventListener("click", function () {
    formWorkshop.reset();
    infoSesi.textContent = "-";
    pesanWorkshop.textContent = "Form telah direset.";
});