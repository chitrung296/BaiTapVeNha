// bài 2: loại bỏ các phần tử trùng nhau trong mảng
// input [1,2,1,3,2,3,1]
// output :[1,2,3];

console.log(trungNhau); // In ra mảng kết quả

let a = [1, 3, 4, 2, 1, 2, 8, 1, 4, 5, 2, 3, 6, 2];
let b = [];

for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}

console.log(b); // In ra mảng b

