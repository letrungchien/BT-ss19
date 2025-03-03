let thang =+prompt("mời bạn nhập tháng ");
switch(thang){
   case 1,3,5,7,8,10,12:
    alert("tháng có 31 ngày");
    break;
   case 2:
    alert("tháng có 28 hoặc 29 ngày");
    break;
    case 4,6,9,11:
    alert("tháng có 30 ngày");
    break;
    default:
    alert("tháng nhập không hợp lệ");
}
