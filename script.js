function hitungLuas(params) {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert("Silakan masukkan angka positif yang valid.");
        return;
    }
    const luas = (alas * tinggi) / 2;
    document.getElementById("luas").textContent = luas.toFixed(2);
}
function hitungKeliling(params) {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
        alert("Silakan masukkan angka positif yang valid untuk semua sisi.");
        return;
    }
    const keliling = sisiA + sisiB + sisiC;
    document.getElementById("keliling").textContent = keliling.toFixed(2);
}
function resetkeliling(params) {
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("keliling").textContent = "";
}
function resetLuas(params) {
    document.getElementById("alas").value
    document.getElementById("tinggi").value
    document.getElementById("luas").value
}