function tambah(){
  let angka1 = Number(document.getElementById("angkapertama").value)
  let angka2 = Number(document.getElementById("angkakedua").value)

  tampilkan(angka1 + angka2, "tambah")
}

function kurang(){
  let angka1 = Number(document.getElementById("angkapertama").value)
  let angka2 = Number(document.getElementById("angkakedua").value)

  tampilkan(angka1 - angka2, "kurang")
}

function kali(){
  let angka1 = Number(document.getElementById("angkapertama").value)
  let angka2 = Number(document.getElementById("angkakedua").value)

  tampilkan(angka1 * angka2, "kali")
}

function bagi(){
  let angka1 = Number(document.getElementById("angkapertama").value)
  let angka2 = Number(document.getElementById("angkakedua").value)

  if (angka2 === 0) return tampilkanGalat("Tidak bisa dibagi 0", "bagi")
  tampilkan(angka1 / angka2, "bagi")
}

function modul(){
  let angka1 = Number(document.getElementById("angkapertama").value)
  let angka2 = Number(document.getElementById("angkakedua").value)

  if (angka2 === 0) return tampilkanGalat("Tidak bisa dibagi 0", "modul")
  tampilkan(angka1 % angka2, "modul")
}

/* ---------- Menampilkan hasil ---------- */

function tampilkan(nilai, op){
  if (!Number.isFinite(nilai)) return tampilkanGalat("Hasil terlalu besar", op)

  // Bilangan bulat ditampilkan apa adanya. Pecahan dirapikan supaya
  // 0.1 + 0.2 tampil 0.3 (bukan 0.30000000000000004)
  const rapi = Number.isInteger(nilai) ? nilai : parseFloat(nilai.toPrecision(15))
  isiHasil(String(rapi), false, op)
}

function tampilkanGalat(pesan, op){
  isiHasil(pesan, true, op)
}

function isiHasil(teks, galat, op){
  const el = document.getElementById("hasil")
  el.textContent = teks
  el.classList.toggle("galat", galat)

  // mulai ulang animasi kecil setiap kali ada hasil baru
  el.classList.remove("pop")
  void el.offsetWidth
  el.classList.add("pop")

  // tandai tombol operasi yang terakhir dipakai
  document.querySelectorAll(".opr button").forEach(function(tombol){
    tombol.classList.toggle("active", tombol.dataset.op === op)
  })
}

/* ---------- Dark / Light mode ---------- */

function setMode(gelap, simpan = true){
  document.getElementById("mode").classList.toggle("darkmode", gelap)
  document.getElementById("btn-dark").setAttribute("aria-pressed", gelap)
  document.getElementById("btn-light").setAttribute("aria-pressed", !gelap)

  if (simpan) {
    try { localStorage.setItem("mode", gelap ? "dark" : "light") } catch (e) {}
  }
}

function darkMode(){
  setMode(true)
}

function lightMode(){
  setMode(false)
}

// Saat halaman dibuka: pakai pilihan terakhir, atau ikuti pengaturan perangkat
function mulaiMode(){
  let tersimpan = null
  try { tersimpan = localStorage.getItem("mode") } catch (e) {}

  const gelap = tersimpan
    ? tersimpan === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches

  setMode(gelap, false)
}

mulaiMode()
