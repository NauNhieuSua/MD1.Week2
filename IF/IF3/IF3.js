let useName = prompt(" Nhap du lieu")
if (useName="Admin"){
    let passWord = prompt(" Mat khau");
    if(passWord=="the Master"){
        alert("Welcome")
    }else if(passWord=="null"){
        alert("Canceled");
    }else {
        alert("Wrong password");
    }
} else if (useName=="null"){
    alert("canceld");
} else {
    alert(" I don't know you");
}
