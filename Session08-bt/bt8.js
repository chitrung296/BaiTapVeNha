// Tính chỉ số cân nặng BMI :
// Viết chương trình cho phép người dùng nhập vào cân nặng(kg) và chiều cao(m);
// Sau đó hiển thị kết quả phân loại theo chỉ số BMI dưới đây.
// bmi = weight / ( height ^ 2 );
/*
Phân loại                       BMI (kg/m3) - WHO                  BMI (kg/m3) - IDI & WPRO
Cân nặng thấp (gầy)                 <18,5                                   

Bình thường                         18,5 - 24,9                             18,5 - 22,9

Thừa cân                            ≥25                                     ≥23

Tiền béo phì                        25 - 29,9                               23 - 24,9           

Béo phì độ I                        30 - 34,9                               25-29,9

Béo phì độ II                       35 - 39,9                               ≥30

Béo phì độ III                      ≥40
*/

let weight = prompt("Nhập cân nặng của bạn (kg):");
let height = prompt("Nhập chiều cao của bạn (m):");

// Chuyển đổi giá trị nhập vào từ chuỗi sang số thực
weight = parseFloat(weight);
height = parseFloat(height);

// Tính chỉ số BMI
let bmi = weight / (height * height);

// Phân loại BMI
let classification = "";
if (bmi < 18.5) {
    classification = "Cân nặng thấp (gầy)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    classification = "Bình thường";
} else if (bmi >= 25 && bmi <= 29.9) {
    classification = "Thừa cân";
} else if (bmi >= 30 && bmi <= 34.9) {
    classification = "Béo phì độ I";
} else if (bmi >= 35 && bmi <= 39.9) {
    classification = "Béo phì độ II";
} else {
    classification = "Béo phì độ III";
}

alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "\nPhân loại theo WHO: " + classification);

























