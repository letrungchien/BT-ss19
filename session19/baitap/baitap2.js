let text =prompt("mời bạn nhập");
let KiemTra = text.indexOf("0","1","2","3","4","5","6","7","8","9");
if(KiemTra == -1){
    alert("ký tự "+text+" là chữ cái");
}else{
    alert("ký tự "+text+" không phải là chữ cái");
}
