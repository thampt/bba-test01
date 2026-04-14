# git
- flow: working directory (git add)>> staging area (git commit) >> git local (git push) >> github

Set default user/email branch cho toàn bộ repo, trường hợp set riêng từng repo thì chạy lệnh trong terminal của repo đó.
- set user: `git config --global user.name "tên user"`
- set email: `git config --global user.email "địa chỉ email"`
- `git config --global init.defaultBranch main` set defaul branch

gồm có 3 state
- working directory
    - `git init`: khởi tạo repo
- staging area:
    - `git add <tên file>` , nhiều file theo định dạng \'\*.<định dạng>, folder /**/*.js, like \'\*name*'
    - `git add . `//toàn bộ file

- repository
    - `git commit -m "nội dung commit"`, đẩy vào git local, thống nhất suffix chore: chỉnh sửa nhỏ or xóa file ko cần thiết, feat: thêm mới file/chức năng, fix: sửa tc/code
    - `git remote add origin <url>` connect git -> github 
    - `git branch -M main`
    - `git push origin <branch>`, đẩy lên server (github)
Cách lệnh khác
- `git status`: trả về file xanh là đang ở staging, đỏ là vẫn ở working directory
- `git log`: xem lịch sử lệnh git

# Javascript
- Comment shortkey:

`ctrl + /`: //  
`shift + alt + a`: /* nội dung */ 

- Biến

<từ khóa> <tên biến>: <giá trị>
    - từ khóa: 
        - let: khai báo trong block {}, không cho khai báo lại trong cùng 1 block
        - var: khai báo toàn cục, có thể ghi đè, ko dùng
    - tên biến: 
        - chỉ dùng chữ cái, số, _, $
        - không bắt đầu bằng số
        - phân biệt hoa thường
        - viết thường ký tự đầu
    - giá trị: data type string có thể set như sau:
        - trong ''
        - trong ""
        - trong ``
            - dùng khi nhúng biến và biểu thức, với format `nội dung ${tên biến} và ${biểu thức}`
            - dùng khi chuỗi có xuống dòng mà không cần \n
        
- Hằng số

<từ khóa> <tên hằng>: <giá trị>
    - từ khóa: const, dùng khi giá trị không thay đổi 

- Toán tử so sánh
    - ==: Chỉ so sánh giá trị, không quan tâm/ko so sánh kiểu dữ liệu
    - ===: so sánh giá trị && kiểu dữ liệu
    - các kiểu khác: !=, !==, <,>, <=, >=, khi so sánh <,> không chuyển được cùng 1 kiểu thì luôn trả false
- Toán tử logic
    - &&: và
    - ||: hoặc
- Toán tử 1 ngôi
    - prefix: tăng giá trị trước, trả về biến sau
        - ++x
        - --x
    - suffix: trả về biến trước, tăng giá trị sau
        - x++
        - x--
- Toán tử toán học: +, -, *, /,% (lấy phần dư của phép chia)
- Câu điều kiện:
    - `for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>){code}`
    - for (of)
        - dùng cho mảng
        - `for (let <tên biến> of <tên mảng>){code}`
    - for (in)
        - dùng cho object
        - `for (let <tên biến> in <tên object>) {code}`
    - while
        - dùng khi cần kiểm tra điều kiện trước
        - `while (<điều kiện>) {code}`
    - do/while
        - dùng khi chạy code 1 lần rồi mới kiểm tra điều kiện
        - `do {code} while (<điều kiện>)` 




