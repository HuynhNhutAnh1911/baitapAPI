const BASE_URL = "https://62f50947535c0c50e768496b.mockapi.io";

function getDSTT() {
  batLoading();
  axios({
    url: `${BASE_URL}/trumgtam`,
    method: "GET",
  })
    .then(function (res) {
      console.log("res: ", res);
      tatLoading();
      renderDSTT(res.data);
    })
    .catch(function (err) {
      tatLoading();
      console.log("err: ", err);
    });
}
function xoaTT(id) {
  axios({
    url: `${BASE_URL}/trumgtam/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      console.log("res: ", res);
      getDSTT();
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}
getDSTT();

function themTT() {
  let newTT = layThongTinTuForm();
  batLoading();
  axios({
    url: `${BASE_URL}/trumgtam`,
    method: "POST",
    data: newTT,
  })
    .then(function (res) {
      getDSTT();
      tatLoading();
    })
    .catch(function (err) {
      console.log(err);
    });
}
function suaTT(id) {
  axios({
    url: `${BASE_URL}/trumgtam`,
    method: "GET",
  })
    .then(function (res) {
      dstt = res.data;
      dstt.forEach((tt) => {
        if (tt.id == id) {
          showThongTinLenForm(tt);
        }
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function capNhatTT() {
  batLoading();
  var oldTT = layThongTinTuForm();
  axios({
    url: `${BASE_URL}/trumgtam/${oldTT.id}`,
    method: "PUT",
    data: oldTT,
  })
    .then(function (res) {
      getDSSV();
      tatLoading();
    })
    .catch(function (err) {
      console.log(err);
    });
}
