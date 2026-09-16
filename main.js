function tambah(){
  let angka1 = Number(document.getElementById("angkapertama").value) 
let angka2 = Number(document.getElementById("angkakedua").value )

document.getElementById("hasil").innerHTML = 
angka1 + angka2
}

function kurang(){
  let angka1 = Number(document.getElementById("angkapertama").value) 
let angka2 = Number(document.getElementById("angkakedua").value )

document.getElementById("hasil").innerHTML = 
angka1 - angka2
}

function kali(){
  let angka1 = Number(document.getElementById("angkapertama").value) 
let angka2 = Number(document.getElementById("angkakedua").value )

document.getElementById("hasil").innerHTML = 
angka1 * angka2
}

function bagi(){
  let angka1 = Number(document.getElementById("angkapertama").value) 
let angka2 = Number(document.getElementById("angkakedua").value )

document.getElementById("hasil").innerHTML = 
angka1 / angka2
}

function modul(){
  let angka1 = Number(document.getElementById("angkapertama").value) 
let angka2 = Number(document.getElementById("angkakedua").value )

document.getElementById("hasil").innerHTML = 
angka1 % angka2
}

function darkMode(){
    document.getElementById("mode").classList.add("darkmode")
}
function lightMode(){
    document.getElementById("mode").classList.remove("darkmode")
}