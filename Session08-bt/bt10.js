// Bài 10: Viết chương trình nhập vào số tháng trong năm,in ra số ngày trong tháng đó.
// Ví dụ : Người dùng nhập vào số 7 thì in ra tháng 7 có 31 ngày.

let month = parseInt(prompt("Nhập số tháng trong năm (từ 1 đến 12):"));

// Kiểm tra tính hợp lệ của tháng
if (isNaN(month) || month < 1 || month > 12) {
    alert("Vui lòng nhập một số tháng hợp lệ từ 1 đến 12!");
} else {
    // Tính số ngày trong tháng
    let daysInMonth;
    switch (month) {
        case 1: // Tháng 1
        case 3: // Tháng 3
        case 5: // Tháng 5
        case 7: // Tháng 7
        case 8: // Tháng 8
        case 10: // Tháng 10
        case 12: // Tháng 12
            daysInMonth = 31;
            break;
        case 4: // Tháng 4
        case 6: // Tháng 6
        case 9: // Tháng 9
        case 11: // Tháng 11
            daysInMonth = 30;
            break;
        case 2: // Tháng 2
            // Kiểm tra năm nhuận
            let year = new Date().getFullYear();
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                daysInMonth = 29; // Năm nhuận
            } else {
                daysInMonth = 28; // Năm không nhuận
            }
            break;
    }
    // Hiển thị kết quả
    alert("Tháng " + month + " có " + daysInMonth + " ngày.");
}








