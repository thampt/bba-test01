# git
- undo
    - `git commit --amend -m "<message>"`, sửa nội dung message commit cuối cùng và đẩy các file mới/thay đổi từ stage sang repo
    - `git restore --staged <file_name>` , chuyển từ staging area về working directory
    - `git restore --staged .` , restore toàn bộ file
    - `git reset HEAD~1`
        - `git reset HEAD~1` thực chất là `git reset --mixed HEAD~1` (mặc định) reset 1 commit gần nhất, xóa trên staging, giữ trên working directory
        - `git reset --soft HEAD~1` giữ nguyên thay đổi trên stage, dùng khi muốn sửa commit (dùng với --amend)
        - `git reset --hard HEAD~1` Xóa toàn bộ thay đổi trên working directory, stageing area, commit cuối cùng, lịch sử commit, đưa toàn bộ project về trạng thái của commit trước đó 1 commit.
    - `git reset HEAD ~N`, tương tự `HEAD~1`, N ở đây là số commit cần reset.
    - commit đầu tiên không thể reset, muốn reset phải xóa thư mục git và init lại
        - `rm -rf .git` xóa thư mục git
        - `git init` init lại 

- branching
    - `git pull origin main`
    - `git branch` lấy danh sách các nhánh
    - `git branch <tên branch>` tạo nhánh, nhánh mới copy giống nhánh hiện tại
    - `git checkout <tên nhánh>` chuyển sang nhanh mới
    - `git checkout -b <tên nhánh>` tạo mới và chuyển sang nhánh vừa tạo
    - `git branch -D <tên nhánh>` xóa nhánh
    pull code về trước khi tạo nhánh mới
- gitignore
    - chỉ định cách file, folder không cho phép git tracking
    - format:
        - \# ở đầu dòng là ghi chú trong file gitignore
        - `ten_file.extension`
        - `*.log`: ignore toàn bộ các file .log
        - `folder_name/`: ignore toàn bộ thư mục
        - `**/*.tmp` ignore file trong thư mục con
        - `!filename.log` dùng ! để không ignore file
        - `/todo` ignore file chỉ ở thư mục gốc
        - `doc/**/*.txt` ignore toàn bộ file .txt trong các foler con của `doc`

# Javascript
- convention
    - snake_case: tạm thời ko dùng
    - kebab-case: dùng đặt tên file/folder
    - camelCase: dùng đặt tên biến/hàm
    - PascalCase: tất cả các chữ cái đầu viết hoa, dùng khi đặt tên class
        
 - console.log
    - console.log("string");
    - console.log(`${varilable_name}`);
    - console.log(varilable_name);
    
- object
    - chỉ khai báo 1 lần, nhưng có thể thay đổi thuộc tính
    - khai báo:
        - format:
            ```
            <từ khóa> <tên object> = {
                key1: value1,
                key2: value2,
                ...
            }    
        - từ khóa: let/const
        - value: có thể là giá trị hoặc object khác
    - sử dụng:
        - `ten_object.key`
        - `ten_object["ten key"]`
        - `for (let value of Object.values(ten_object)) {code}` 
        - `console.log("note",ten_object)` không được dùng nối chuỗi `"note" + ten_object` vì sẽ tự động convert object toString và trả về chuỗi "[object Object]"
    - thêm phần tử
        - `ten_object.key = value` 
        - `ten_object["ten key"] = value` dùng [] khi key có khoảng trắng, biến hoặc có dấu
        - thêm nhiều thuộc tính cùng lúc:
            ```
            Object.asign(ten_object){
                key1: value1,
                key2: value2
            }
        - tạo object mới thay thế:
           ```
           const origin_object;
            const new_object = {
                ...origin_object,
                key1: value1,
                key2: value2
            }
     - xóa thuộc tính
        - `delete ten_object.key`
        - `delete ten_object.["key"]`


- logical operator: &&, ||, !

- array
    - khai báo: 
        - <từ khóa> <tên biến> = [1,2,...]
        - <từ khóa> <tên biến> = new array(5); mảng có 5 phần từ kiểu underfined
        - <từ khóa> <tên biến> = new array(1,3,5);
        - <từ khóa> <tên biến> = Array.of(5);
        - <từ khóa> <tên biến> = Array.from("string"); (s,t,s,i,n,g)
    - sử dụng:
        - <tên biến>[index phần tử];
        - <tên array; get toàn bộ phần tử
        - <tên array.lenght; đếm số phần tử
    - thêm phần tử
        - `arr_name.push(x)` push x vào cuối mảng
        - `arr_name.unshift(x)` push x vào đầu mảng
        - `arr_name.splice(x,y,z)` chèn z vào vị trí x và xóa phần tử thứ y, z có thể có nhiều phần tử, cách nhau bởi dấu,
    - sao chép array
        - `let newArrayName = [...originArrayName]` 
        - `let newArrayName = originArrayName.slice()` ko khuyến nghị
    - xóa phần tử
        - `arr_name.pop()` xóa cuối mảng
        - `arr_name.shift()` xóa đầu mảng
        - `arr_name.splice(x,y)` xóa y phần tử từ vị trí x
        - `arr_name.lenght = 0` xóa toàn bộ
    - tìm kiếm phần tử
        - `arr_name.find((param) => {code})` trả về phần tử đầu tiên hợp lệ, `(param)` có thể blank
        ví dụ: `arr_name.find(num => num > 8)`
        - `arr_name.find((item, index, arr) => {code})` get giá trị tìm thấy `item` tại vị trí `index` của `arr` chính mảng đang duyệt
    - filter
        - `arr_name.filter()` trả về tất cả các phần tử hợp lệ
    - biến đổi mảng
        - `map` tạo mảng mới bằng cách biến đổi từng phần tử mảng cũ
            `let doubled = originalArray.map(num => num * 2);`
    - sort
        - `array_name.sort((a,b) => a-b)` sort asc, so sánh từng cặp phần tử ab
        - `array_name.sort((a,b) => b-a)` sort desc





- function
    - khai báo: 
        - `function function_name(param1,param2){code}`
            - `function function_name(param1,param2=222){code}` param2 có giá trị mặc định, khi gọi không cần điền đối số cho param2, nếu điền sẽ overwrite giá trị mặc định.
        - `<từ khóa> <tên biến> = function <nameFunction>(<list param>) {code}` không gọi bằng nameFunction mà phải gọi bằng tên biến `ten_bien(list param)`
        - `<từ khóa> <nameFunction> = (<param 1>, <param 2>) => {code};` 
            - nếu có 1 tham số thì không cần ngoặc (), không có tham số hoặc nhiều hơn 1 thì cần ()
            - nếu `code` chỉ có 1 dòng thì không cần ngoặc {}
            - khi gọi lại function define = arrow function như gọi function thông thường: `nameFunction(đối số 1, đối số 2)`
            

        






