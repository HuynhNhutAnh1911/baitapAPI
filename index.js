const BASE_URL = "https://62f50947535c0c50e768496b.mockapi.io";
document.getElementById("txtMaSV").disabled = true;
function getDSSV() {
  batLoading();
  axios({
    url: `${BASE_URL}/sv`,
    method: "GET",
  })
    .then(function (res) {
      console.log("res: ", res);
      tatLoading();
      renderDSSV(res.data);
    })
    .catch(function (err) {
      tatLoading();
      console.log("err: ", err);
    });
}


function xoaSV(id) {
  axios({
    url: `${BASE_URL}/sv/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      console.log("res: ", res);
      getDSSV();
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}
getDSSV();


function themSV() {
  let newSV = layThongTinTuForm();
  batLoading();
  axios({
    url: `${BASE_URL}/sv`,
    method: "POST",
    data: newSV,
  })
    .then(function (res) {
      getDSSV();
      tatLoading();
    })
    .catch(function (err) {
      console.log(err);
    });
}


function suaSV(id) {
  axios({
    url: `${BASE_URL}/sv`,
    method: "GET",
  })
    .then(function (res) {
      dssv = res.data;
      dssv.forEach((sv) => {
        if (sv.id == id) {
          showThongTinLenForm(sv);
        }
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}
function resetSV() {
 
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemLy").value = "";
  document.getElementById("txtDiemHoa").value = "";
  getDSSV();
}

  
function capNhatSV(){
  debugger;
  batLoading();
  var oldSV = layThongTinTuForm();
  axios({
    url: `${BASE_URL}/sv/${oldSV.id}`,
    method: "PUT",
    data: oldSV,
  })
    .then(function (res) {
      debugger;
      getDSSV();
      tatLoading();
    })
    .catch(function (err) {
      console.log(err);
    });
}

