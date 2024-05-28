// Bài 7: Viết chương trình cho phép người dùng nhập vào số nguyên x:
// Nếu x==0 thì in ra x có giá trị là 0;
// Nếu x>0 thì in ra x là số nguyên dương.
// Nếu x<0 thì in ra x là số nguyên âm.

let x = prompt("Nhập số nguyên x:");

x = parseInt(x);

// Kiểm tra giá trị của x và hiển thị thông báo phù hợp
if (isNaN(x)) {
    alert("Vui lòng nhập một số nguyên hợp lệ!");
} else {
    if (x === 0) {
        alert("x có giá trị là 0.");
    } else if (x > 0) {
        alert("x là số nguyên dương.");
    } else {
        alert("x là số nguyên âm.");
    }
}
