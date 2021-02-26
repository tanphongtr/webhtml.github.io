function check(a, b, c, d, e, f) {
    var atpos = e.indexOf("@");
    var dotpos = e.lastIndexOf(".");

    var str = c;
    var regex1 = /[a-zA-Z0-9]/;
    //var regex2 = /[A-Z]/;
    var regex3 = /[0-9]/;
    //var regex4 = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|\;|\:|\s/;
    var regexPhone = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    var res = regex1.test(str) && regex3.test(str);
    var checkphone = regexPhone.test(f);

	if(!a) {
        document.getElementById("warning").innerHTML = "Chưa nhập họ tên";
    }

    else if(!b) {
        document.getElementById("warning").innerHTML = "Tên đăng nhập không được rỗng";
    }

    else if(c==b) {
        document.getElementById("warning").innerHTML = "Mật khẩu không được trùng tên đăng nhập";
    }

	else if(c.length<6) {
        document.getElementById("warning").innerHTML = "Password phải từ 6 ký tự trở lên";
    }

	else if(c!=d) {
        document.getElementById("warning").innerHTML = "Password không trùng khớp"
    }

	else if(res==false) {
        document.getElementById("warning").innerHTML = "Password phải chứa ít nhất 1 ký tự in hoa, 1 ký tự đặc biệt, 1 số";
    }

	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length) {
        document.getElementById("warning").innerHTML = "Địa chỉ e-mail không hợp lệ";
    }

    else if (checkphone==false) {
        document.getElementById("warning").innerHTML = "Số điện thoại không hợp lệ";
    }


	else {
        alert('Đăng ký thành công!');
    }
}