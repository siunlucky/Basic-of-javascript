let data = {
    nama : "Rhodey",
    tinggi_badan : 1.7,
    berat_badan : 90
}
let bmi = data.berat_badan / Math.pow(data.tinggi_badan, 2);
console.log("BMI anda = " + bmi);

if (bmi < 18.5) {
    console.log("Anda Kekurangan Berat Badan");
        
}
if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Anda Normal");
        
}
if (bmi >= 25 && bmi < 30) {
    console.log(" Anda Kelebihan Berat Badan");
        
}
if (bmi >= 30 ) {
    console.log("Anda Obesitas");
        
}