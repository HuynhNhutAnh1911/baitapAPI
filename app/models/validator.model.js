var validation = {
    kiemTraRong: function (value, idError, message) {
      if (value.length == 0) {
        document.getElementById(idError).innerText = message;
        return false;
      } else {
        document.getElementById(idError).innerText = "";
        return true;
      }
    },
    kiemTraDoDai: function (value, idError, message, min, max) {
      if (value.length < min || value.length > max) {
        document.getElementById(idError).innerText = message;
        return false;
      } else {
        document.getElementById(idError).innerText = "";
        return true;
      }
    },
    kiemTraEmail :function(value, idError, message){
        const re =
         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
         if (re .test(value)){
            document.getElementById(idError).innerText = " ";
            return true;
         }else{
            document.getElementById(idError).innerText = message;
            return false;
         }
    },
    kiemTraMatKhau : function(value, idError, message){
      const passwordPattern =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ ;
        if(value.match(passwordPattern)){ 
          document.getElementById(idError).innerText = " ";
          return true;
        }
        else{ 
          document.getElementById(idError).innerText = message;
          return false;
        }
    },
    kiemtraSo: function(value, idError, message){
      const number =  /^[0-9]+$/ ;
      if(value.match(number)){
        document.getElementById(idError).innerText = " ";
        return true;
      }else{ 
        document.getElementById(idError).innerText = message;
        return false;
      }
    }
  };
