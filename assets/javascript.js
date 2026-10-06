// ===== VARIABEL =====
let ekspresi  = "";      
let hasilBaru = false;  
 
// ===== AMBIL ELEMEN HTML =====
let layarAngka    = document.getElementById("angka");
let layarEkspresi = document.getElementById("ekspresi");
 
 
// ===== FUNGSI INPUT ANGKA =====
function inputAngka(angka) {
 
    if (hasilBaru) {
        ekspresi  = "";
        hasilBaru = false;
    }
 
    if (angka === ".") {
        let bagian = ekspresi.split(/[\+\-\*\/\%]/).pop();
        if (bagian.includes(".")) return;
    }
 
    ekspresi = ekspresi + angka;
 
    layarAngka.innerHTML    = ekspresi;
    layarEkspresi.innerHTML = "";
}
 
 
// ===== FUNGSI INPUT OPERATOR =====
function inputOperator(op) {
 
    if (ekspresi === "") return;
 
    hasilBaru = false;
 
    let karakterTerakhir = ekspresi[ekspresi.length - 1];
    if (["+", "-", "*", "/", "%"].includes(karakterTerakhir)) {
        ekspresi = ekspresi.slice(0, -1);
    }
 
    ekspresi = ekspresi + op;
 
    let tampilan = ekspresi
        .replace(/\*/g, "×")
        .replace(/\//g, "÷");
 
    layarAngka.innerHTML = tampilan;
}
 
 
// ===== FUNGSI HITUNG =====
function hitung() {
 
    if (ekspresi === "") return;
 
    let tampilEkspresi = ekspresi
        .replace(/\*/g, "×")
        .replace(/\//g, "÷");

    let hasil = eval(ekspresi);
 
    layarEkspresi.innerHTML = tampilEkspresi + " =";
    layarAngka.innerHTML    = hasil;
 
    ekspresi  = String(hasil);
    hasilBaru = true;
}
 
 
// ===== FUNGSI HAPUS SEMUA (C) =====
function hapusSemua() {
    ekspresi                = "";
    hasilBaru               = false;
    layarAngka.innerHTML    = "0";
    layarEkspresi.innerHTML = "";
}
 
 
// ===== FUNGSI HAPUS SATU ANGKA (⌫) =====
function hapusSatuAngka() {
    ekspresi = ekspresi.slice(0, -1);
 
    if (ekspresi === "") {
        layarAngka.innerHTML = "0";
    } else {
        let tampilan = ekspresi
            .replace(/\*/g, "×")
            .replace(/\//g, "÷");
        layarAngka.innerHTML = tampilan;
    }
}