
- var: không giới hạn trong ngoài {}
- let/const: giới hạn {}

- break: dừng ngay
- continue: bỏ qua xử lý của vòng lặp hiện tại, qua xử lý của lặp tiếp theo

- toán tử điều kiện
    - (<điều kiện>)? <output nếu đk đúng>: <output nếu đk sai>;
    - có thể lồng đk như excel

- loop
    - array: 
        - `for (let item of arr){}`
        - `arr.forEach(function(<item>, <index>, arr){})`

    - object: `for (let key of object){}`

- Utils
    - string:
        - trim()
        - `trimStart()`, `trimEnd()`
        - `toUpperCase()`, `toLowerCase()`
        - `includes("string")` trả về true/false
        - `split("string")` cắt chuỗi phân cách bởi "string" đã nhập, output là array
        - `replace("từ bị thay thế", "từ thay thế")`
    - array
        - `let first = arr.find(num=>num>10)` trả 1 kết quả đầu tiên hợp lệ
        - `let first = arr.filter(num => num > 10)` trả về tất cả các ký tự hợp lệ
        - `let doubled = arr.map(num => num*2);`
        - `arr.sort((a,b) => a-b)` sort a>z
        


    