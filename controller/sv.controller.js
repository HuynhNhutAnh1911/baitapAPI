

 
 renderDSSV = function(dssv){
    var contentHTML = "";
    dssv.forEach((sv) => {
        var contentTr = `<tr>
            <td>${sv.id}</td>
            <td>${sv.name}</td>
            <td>${sv.email}</td>
            <td>${Math.floor((sv.math + sv.chemistry + sv.physics) / 3)}</td>
            <td>
            <button onclick="xoaSV('${sv.id}')" class="btn btn-warning">Xóa</button>
            <button onclick="suaSV('${sv.id}')" class="btn btn-success">Sửa</button>
            </td>
        
        </tr>`;
        contentHTML+=contentTr;
    });
    document.getElementById("tbodySinhVien").innerHTML=contentHTML
 };
 function batLoading(){
    document.getElementById("loading").style.display="flex";
 }
 function tatLoading(){
    document.getElementById("loading").style.display="none";
 }
 
 function showThongTinLenForm(sv) {
  document.getElementById("txtMaSV").value = sv.id;
  document.getElementById("txtTenSV").value = sv.name;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.password;
  document.getElementById("txtDiemToan").value = sv.math;
  document.getElementById("txtDiemLy").value = sv.physics;
  document.getElementById("txtDiemHoa").value = sv.chemistry;
}
 function layThongTinTuForm() {
  const id = document.getElementById("txtMaSV").value;
  const name = document.getElementById("txtTenSV").value;
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPass").value;
  const math = document.getElementById("txtDiemToan").value;
  const physics = document.getElementById("txtDiemLy").value;
  const chemistry = document.getElementById("txtDiemHoa").value;
  return new SinhVien(name, email, password, math, physics, chemistry, id);
}
