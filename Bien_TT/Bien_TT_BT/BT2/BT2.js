function Change() {
    let Amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;

    if (From == "VND"&& To == "VND") {
        Result = "Result:" + Amount + "đ" ;
    } else if (From == "USD"&& To == "USD") {
        Result = "Result:" + Amount + "$";
    } else if (From == "USD"&& To == "VND") {
        Result = "Result:" + Amount * 23000;
    } else {
        Result = "Result:" + Amount / 23000;
}
    document.getElementById("Result").innerHTML= Result;

}
