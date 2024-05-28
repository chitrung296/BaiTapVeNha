// Bài 5: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng switch case).

let number = prompt("Nhập vào một số:");

number = parseInt(number);

// Kiểm tra dạng của số
switch (true) {
    case isNaN(number):
        alert("Vui lòng nhập một số hợp lệ!");
        break;
    case number % 2 === 0:
        alert(number + " là số chẵn.");
        break;
    default:
        alert(number + " là số lẻ.");
        break;
}
