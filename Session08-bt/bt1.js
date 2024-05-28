// Bài 1: Viết chương trình nhập vào số tuổi của 1 người.Nếu số tuổi người đó >=18 tuổi , 
// hiển thị thông báo trên 18 tuổi ngược lại bạn chưa đủ 18 tuổi!

let age = prompt("Nhập số tuổi của bạn:");

age = parseInt(age);

// Kiểm tra xem tuổi có hợp lệ không
if (isNaN(age)) {
    alert("Vui lòng nhập một số hợp lệ!");
} else {
    // Kiểm tra tuổi và hiển thị thông báo phù hợp
    if (age >= 18) {
        alert("Bạn trên 18 tuổi.");
    } else {
        alert("Bạn chưa đủ 18 tuổi!");
    }
}
