// Bài 6: Viết chương trình cho phép người dùng nhập màu vào kiểm tra.
// Nếu nhập 1 trong các màu : xanh, đỏ,vàng thì hiển thị màu người dùng nhập
// Nếu nhập màu khác hiển thị màu không hợp lệ!

let color = prompt("Nhập một màu (xanh, đỏ, vàng):");

// Chuyển đổi giá trị nhập vào thành chữ thường để kiểm tra
color = color.toLowerCase();

// Kiểm tra màu và hiển thị thông báo phù hợp
switch (color) {
    case "xanh":
    case "đỏ":
    case "vàng":
        alert("Màu bạn nhập là: " + color);
        break;
    default:
        alert("Màu không hợp lệ!");
        break;
}
