// Bài 4: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng câu điều kiện if-else).

let number = prompt("Nhập vào một số:");

number = parseInt(number);

// Kiểm tra số chẵn hay số lẻ
if (isNaN(number)) {
    alert("Vui lòng nhập một số hợp lệ!");
} else {
    if (number % 2 === 0) {
        alert(number + " là số chẵn.");
    } else {
        alert(number + " là số lẻ.");
    }
}
