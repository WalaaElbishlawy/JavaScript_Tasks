
function getCookie(cookieName) {
  var allCookies = document.cookie.split(";");

  for (var i = 0; i < allCookies.length; i++) {
    var cookie = allCookies[i].trim();

    var equalPos = cookie.indexOf("=");
    var key = cookie.slice(0, equalPos);
    var value = cookie.slice(equalPos + 1);
    if (key === cookieName) {
      return value;
    }
  }
  return null;
}

function setCookie(cookieName, cookieValue, expiryDate){

  var cookieN = cookieName + "=" + cookieValue;
  if(expiryDate){
    cookieN += ";expires=" + expiryDate.toUTCString();
  }
  document.cookie= cookieN;
}

function deleteCookie(cookieName){
  document.cookie = cookieName + "=;expires=Thu, 01 Jan 2020 00:00:00 UTC";
}

function allCookieList(){
  var allCookie = document.cookie.split(";");
  var all = {};  

  for(var i = 0; i < allCookie.length; i++){
    var item = allCookie[i].trim();
    var equalPos = item.indexOf("=");

    var key = item.slice(0 , equalPos); 
    var val = item.slice(equalPos + 1); 
    all[key] = val;
  } 
  return all;
}

function hasCookie(cookieName) {
  return getCookie(cookieName) !== null;
}
