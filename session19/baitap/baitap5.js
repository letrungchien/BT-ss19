let text =prompt("mời bạn nhập");
let result = text.trim();
let KiemTra =result.includes(" ");
if(KiemTra){
    alert("chuỗi chứa dấu cách");
}else{
    alert("chuỗi không chứa dấu cách");
}