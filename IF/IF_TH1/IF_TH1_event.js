let year = +prompt(" Năm nhuận")
// if (year%4==0 && year%100 !=0){
//     alert(year + " Là năm nhuận");
// } else if(year%100==0 && year%400 !=0){
//     alert(year + " Không phải là năm nhuận")
// } else if(year%100==0 && year%400 ==0) {
//     alert(year + " Là năm nhuận");
// }else { alert(year + " Không phải là năm nhuận")
// }

if (year%4==0){
    if (year%100==0){
        if (year%400==0){
            alert( year + " Lă năm nhuận") ;
        } else {
            alert(year + " Không là năm nhuận");}
        }else {
            alert( year + " Là năm nhuận");}
        } else {
            alert( year + " Không là năm nhuận");
        }


