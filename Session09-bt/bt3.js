/**Bài 3: Cho 1 một mảng  let  numbers=[1,5,8,7,9,6,5,41,2,6,55,4,8];
Tìm số lớn nhất trong mảng
 */
let numbers = [1, 5, 8, 7, 9, 6, 5, 41, 2, 6, 55, 4, 8];

let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log(maxNumber); 
