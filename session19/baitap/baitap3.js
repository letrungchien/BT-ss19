let LoaiTien = prompt("Mời bạn nhập loại tiền muốn đổi(VND,USD)");
let tien =+prompt("Mời bạn nhập số tiền");
 switch(LoaiTien){
    case "VND" :
        let doi =tien/23000
        alert(doi+" USD");
        break;
    case  "USD" :  
    let doi1 =tien*23000
    alert(doi1+" VND");
    break;
    default:
        alert("Loại tiền này hiện chưa cập nhật");
 }

