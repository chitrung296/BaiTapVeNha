        // bài 1: Cho một mảng có sẵn.
    // Tìm phần tử xuất hiện nhiều nhất trong mảng và in ra chúng
    // input: [1,3,3,5,7,7,8,3]
    // output: 3 xuất hiện nhiều nhất 3 lần

    function timXuatHienNhieuNhat(arr) {
        let count = {}; // Đối tượng để lưu trữ số lần xuất hiện của từng phần tử
        let soLan = 0; // Số lần xuất hiện nhiều nhất
        let XuatHienNhieuNhat = null; // Phần tử xuất hiện nhiều nhất

        // Đếm số lần xuất hiện của từng phần tử trong mảng
        for (let i = 0; i < arr.length; i++) {
            if (count[arr[i]] === undefined) {
                count[arr[i]] = 1;
            } else {
                count[arr[i]]++;
            }
            // Cập nhật số lần xuất hiện nhiều nhất và phần tử tương ứng
            if (count[arr[i]] > soLan) {
                soLan = count[arr[i]];
                XuatHienNhieuNhat = arr[i];
            }
        }

        // In ra phần tử xuất hiện nhiều nhất và số lần xuất hiện
        console.log(XuatHienNhieuNhat + " xuất hiện nhiều nhất " + soLan + " lần");
    }

    // Mảng input
    let inputArray = [1, 3, 3, 5, 7, 7, 8, 3];
    // Tìm phần tử xuất hiện nhiều nhất trong mảng và in ra số lần xuất hiện
    timXuatHienNhieuNhat(inputArray);
