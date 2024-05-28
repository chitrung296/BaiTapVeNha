// Bài 9: Viết chương trình cho phép người dùng nhập điểm các môn:Toán,Lí,Hoá,
// Văn, Sử , Địa (thang điểm 10);
// Sau đó tính điểm trung bình các môn học
// Hiển thị kết quả học tập theo loại như sau:

// 8.0 <=ĐTB<=10: xếp loại GIỎI.
// 6.5<=ĐTB<=7.9: xếp loại KHÁ.
// 5.0<=ĐTB<=6.4: xếp loại TRUNG BÌNH.
// ĐTB<5.0 : xếp loại YẾU.

let toan = parseFloat(prompt("Nhập điểm môn Toán:"));
let li = parseFloat(prompt("Nhập điểm môn Lí:"));
let hoa = parseFloat(prompt("Nhập điểm môn Hóa:"));
let van = parseFloat(prompt("Nhập điểm môn Văn:"));
let su = parseFloat(prompt("Nhập điểm môn Sử:"));
let dia = parseFloat(prompt("Nhập điểm môn Địa:"));

// Tính điểm trung bình các môn
let diemTrungBinh = (toan + li + hoa + van + su + dia) / 6;

// Xếp loại điểm trung bình
let xepLoai = "";
if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
    xepLoai = "GIỎI";
} else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
    xepLoai = "KHÁ";
} else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
    xepLoai = "TRUNG BÌNH";
} else {
    xepLoai = "YẾU";
}

// Hiển thị kết quả học tập
alert("Điểm trung bình các môn: " + diemTrungBinh.toFixed(2) + "\nXếp loại: " + xepLoai);
