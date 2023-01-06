function Change() {
    let Amount = document.getElementById("Amount").value;
    let Form = document.getElementById("Form").value;
    let To = document.getElementById("To").value;
    let Result;

    if (Form == "VND"&& To == "VND") {
        Result = "Result:" + Amount + "Đ" ;
    } else if (Form == "USD"&& To == "USD") {
        Result = "Result:" + Amount + "$";
    } else if (Form == "USD"&& To == "VND") {
        Result = "Result:" + Amount * 23000;
    } else {
        Result = "Result:" + Amount / 23000;
}
    document.getElementById("Result").innerHTML= Result;
}
