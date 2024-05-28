/*Bài 1: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược. 
Ví dụ, nếu một mảng chứa các ký tự [ 'c', 's', 'c', '2', '6', '1' ]sau khi thực hiện đảo ngược sẽ là "162csc". */

let array = ['c', 's', 'c', '2', '6', '1'];

let string = array.join('');

let reversedString = string.split('').reverse().join('');

console.log(reversedString);
