// Bài 2: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.
// Nếu dưới 18h thì hiển thị : “Good day”.
// Nếu trên 18h thì hiển thị : “Good evening”.

let hour = prompt("Nhập số giờ trong ngày (0-23):");

hour = parseInt(hour);

if (isNaN(hour) || hour < 0 || hour > 23) {
    alert("Vui lòng nhập một số giờ hợp lệ từ 0 đến 23!");
} else {
    // Kiểm tra giờ và hiển thị thông báo phù hợp
    if (hour < 18) {
        alert("Good day");
    } else {
        alert("Good evening");
    }
}
