$().ready(function () {
  //thực thi 1 hàm khi trang web tải hoàn tất
  $("#demoForm").validate({
    //sử dụng JQuery để xác thực cho biểu mẫu có id = 'demoForm'
    onfocusout: false, // tắt tính năng tự động xác thực khi người dùng di chuyển ra khỏi trường đầu vào
    onkeyup: false, //tắt tính năng tự động xác thực khi người dùng nhập ký tự vào trường đầu vào.
    onclick: false, //Tùy chọn này tắt tính năng tự động xác thực khi người dùng nhấp chuột vào trường đầu vào.
    rules: {
      //Đối tượng này xác định các quy tắc xác thực cho từng trường đầu vào trong biểu mẫu.
      user: {
        //Khóa "user" xác định các quy tắc xác thực cho trường đầu vào có tên "user".
        required: true, //Quy tắc này yêu cầu người dùng phải nhập giá trị vào trường "user".
        maxlength: 15, //Quy tắc này giới hạn độ dài tối đa của giá trị trong trường "user" là 15 ký tự.
        email: true,
      },
      password: {
        //Khóa "password" xác định các quy tắc xác thực cho trường đầu vào có tên "password".
        required: true, //Quy tắc này yêu cầu người dùng phải nhập giá trị vào trường "password"
        minlength: 8, //Quy tắc này giới hạn độ dài tối thiểu của giá trị trong trường "password" là 8 ký tự.
      },
      "re-password": {
        //xác định các quy tắc xác thực cho trường đầu vào có tên "re-password".
        equalTo: "#password", //Quy tắc này yêu cầu giá trị trong trường "re-password" phải giống với giá trị trong trường "password".
        minlength: 8, //Quy tắc này giới hạn độ dài tối thiểu của giá trị trong trường "re-password" là 8 ký tự.
      },
    },
    messages: {
      //Đối tượng này xác định thông báo lỗi sẽ được hiển thị khi người dùng vi phạm các quy tắc xác thực.
      user: {
        required: "Bắt buộc nhập username",
        maxlength: "Hãy nhập tối đa 15 ký tự",
        email: "Vui lòng nhập đúng định dạng @gmail.com",
      },
      password: {
        required: "Bắt buộc nhập password",
        minlength: "Hãy nhập ít nhất 8 ký tự",
      },
      "re-password": {
        equalTo: "Hai password phải giống nhau",
        minlength: "Hãy nhập ít nhất 8 ký tự",
      },
    },
  });
});
