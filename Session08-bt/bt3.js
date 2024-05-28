// Bài 3: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.
// Nếu trước 10h thì hiển thị : “Good morning”.
// Nếu thời gian chưa tới 20h thì hiển thị : “Good day”.
// -Nếu sau 20h hiển thị : “Good evening”.

let hour = prompt("Nhập số giờ trong ngày (0-23):");

hour = parseInt(hour);

if (isNaN(hour) || hour < 0 || hour > 23) {
    alert("Vui lòng nhập một số giờ hợp lệ từ 0 đến 23!");
} else {
    // Kiểm tra giờ và hiển thị thông báo phù hợp
    if (hour < 10) {
        alert("Good morning");
    } else if (hour < 20) {
        alert("Good day");
    } else {
        alert("Good evening");
    }
}
