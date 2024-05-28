// bài 3: viết chương trình nhập vào đoạn text,
// in ra text mới với chữ cái đầu tiên phải viết hoa
// input :"co gang hoc lap trinh";
// outputt: Co Gang Hoc Lap Trinh
let text = "co gang hoc lap trinh";
let arr = text.split(" "); // Tách chuỗi thành các từ

for (let i = 0; i < arr.length; i++) {
    // Chuyển đổi chữ cái đầu tiên của từ thành chữ hoa
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

let chuoiRa = arr.join(" "); // Ghép các từ lại thành một chuỗi mới

console.log(chuoiRa); // In ra chuỗi mới
