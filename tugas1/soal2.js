let barang = [
    { nama : "Beras", harga : 10000, jumlah : 5},
    { nama : "Gula", harga : 14000, jumlah : 5},
    { nama : "Telur", harga : 20000, jumlah : 2},
    { nama : "Minyak Goreng", harga : 9000, jumlah : 10},
]
let total_harga = 0;

for (let i = 0; i < barang.length; i++) {
    total_harga += barang[i].harga * barang[i].jumlah;
}
console.log("Total Harga yang Harus Dibayar Bu Astuti Sebesar : Rp. " + total_harga);