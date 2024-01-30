var siswa = new Object();
siswa.namaDepan = "M.Reza";
siswa.namaBelakang = "Habiburrahman";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

alert("Nama : "+ siswa.namaLengkap());
// function namaLengkap() {
    
// }
