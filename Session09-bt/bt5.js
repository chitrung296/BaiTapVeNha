/**Bài 5: Cho 1 một mảng  let  numbers=[1,5,8,7,9,6,5,41,2,6,55,4,8];
Sắp xếp các phần tử trong mảng theo thứ tự tăng dần.
 */
let numbers = [1, 5, 8, 7, 9, 6, 5, 41, 2, 6, 55, 4, 8];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); 
