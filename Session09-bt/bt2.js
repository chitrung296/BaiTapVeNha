/*Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2 số chẵn.
Ví dụ nếu bạn nhập vào 245468 thì kết quả của chương trình sẽ là 2-454-6-8.
 */
function insertDash(number) {
    // Chuyển số thành chuỗi
    let numStr = number.toString();
   
    let result = '';

    for (let i = 0; i < numStr.length; i++) {
        result += numStr[i];
        // Kiểm tra nếu cả ký tự hiện tại và ký tự tiếp theo đều là số chẵn
        if (i < numStr.length - 1 && isEven(numStr[i]) && isEven(numStr[i + 1])) {
            result += '-';
        }
    }

    return result;
}

// Hàm kiểm tra số chẵn
function isEven(digit) {
    return parseInt(digit) % 2 === 0;
}

// Nhập vào số và in kết quả
let inputNumber = 245468;
let output = insertDash(inputNumber);
console.log(output);
