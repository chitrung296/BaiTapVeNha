/**Bài 4: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.
 * Các kí tự hoa chuyển thành chữ thường.
Ví dụ: nếu bạn nhập vào chuỗi 'Keep Calm And Code On' kết quả của chương trình là 'kEEP cALM aND cODE oN'.
 */
function swapCase(str) {

    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Kiểm tra nếu ký tự là chữ thường thì chuyển sang chữ hoa
        if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } 
        // Nếu ký tự là chữ hoa thì chuyển sang chữ thường
        else {
            result += char.toLowerCase();
        }
    }

    return result;
}

// Nhập vào chuỗi và in kết quả
let inputString = 'Keep Calm And Code On';
let outputString = swapCase(inputString);
console.log(outputString);
