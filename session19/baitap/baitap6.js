let a =+prompt("Mời bạn nhập a");
let b =+prompt("Mời bạn nhập b");
let c =+prompt("Mời bạn nhập c");
 let deta = b*b-4*a*c;
 if(deta >0){
    let x1 =(-b+Math.sqrt(deta))/2*a
    let x2 =(-b-Math.sqrt(deta))/2*a
    alert("Phương trình có 2 nghiệm phân biệt x1 = "+x1+" và x2 = "+x2);
 }else if(deta ==0){
    let x =-b/2/a;
    alert("Phương trình có nghiệm kép x1=x2= "+x);
}else{
    alert("Phương trình vô nghiệm");
}