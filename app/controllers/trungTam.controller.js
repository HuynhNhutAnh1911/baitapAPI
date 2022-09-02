
 renderDSTT = function(dstt){
    var contentHTML = "";
    dstt.forEach((tt) => {
        var contentTr = `<tr>
            <td>${tt.id}</td>
            <td>${tt.taiKhoan}</td>
            <td type="password">${tt.matKhau}</td>
            <td>${tt.hoTen}</td>
            <td>${tt.email}</td>
            <td>${tt.ngonNgu}</td>
            <td>${tt.loaiND}</td>
            <td>
            <button onclick="xoaTT('${tt.id}')" class="btn btn-warning">Xóa</button>
            <button onclick="suaTT('${tt.id}')" class="btn btn-success">Sửa</button>
            </td>
        
        </tr>`;
        contentHTML+=contentTr;
    });
    document.getElementById("tblDanhSachNguoiDung").innerHTML=contentHTML
 };
 function batLoading(){
    document.getElementById("loading").style.display="flex";
 }
 function tatLoading(){
    document.getElementById("loading").style.display="none";
 }
 function showThongTinLenForm(tt) {
    document.getElementById("TaiKhoan").value = tt.taiKhoan;
    document.getElementById("HoTen").value = tt.hoTen;
    document.getElementById("MatKhau").value = tt.matKhau;
    document.getElementById("Email").value = tt.email;
    document.getElementById("loaiNgonNgu").value = tt.ngonNgu;
    document.getElementById("loaiNguoiDung").value = tt.loaiND;
    document.getElementById("MoTa").value = tt.moTa;
    document.getElementById("HinhAnh").value = tt.hinhAnh;
  }
 function layThongTinTuForm() {
    const taiKhoan = document.getElementById("TaiKhoan").value;
    const hoTen = document.getElementById("HoTen").value;
    const matKhau = document.getElementById("MatKhau").value;
    const email = document.getElementById("Email").value;
    const loaiNgonNgu = document.getElementById("loaiNgonNgu").value;
    const loaiNguoiDung = document.getElementById("loaiNguoiDung").value;
    const moTa = document.getElementById("MoTa").value;
    const hinhAnh = document.getElementById("HinhAnh").value;
    return new trungTam(taiKhoan, matKhau, hoTen,email, loaiNgonNgu,loaiNguoiDung,hinhAnh,moTa);
  }
