var siswa = new Object();
siswa.namaDepan = "M.Reza";
siswa.namaBelakang = "Habiburrahman";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};
var siswa2 ={
    namaDepan : "Reza",
    namaBelakang : "Habib",
    namaLengkap: function () {
        return this.namaDepan + " " + this.namaBelakang;
    },
};

alert("Nama : "+ siswa2.namaLengkap());
alert("Nama : "+ siswa.namaLengkap());
// function namaLengkap() {
    
// }
