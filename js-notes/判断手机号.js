function checkPhone(){
  var phone = document.querySelector('.phone-reg').value;
  if(!(/^1[34578]\d{9}$/.test(phone))){
      alert("手机号码有误，请重新填写");
      return false;
  }
}




//手机号加密
var str='1366668888';
var str2 = str.substr(0,3)+"****"+str.substr(7);
alert(str2)