export function AgetCookie(cName) {
    const name = cName + "=";
    // console.log(name)
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('=');
    // console.log(cArr[1])
  
  
    return cArr[1];
  }

  //check

  export function AcheckCookie() {
    const token = AgetCookie();
    console.log(token)
    var name = localStorage.getItem("Adminname");
    console.log(name)
    // console.log(ans)
    if (token != null && name != null) {
      // location.reload();
      return true;
    } else {
      return false
    }
  
  }

  export function getCookie(cName) {
    const name = cName + "=";
    // console.log(name)
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('=');
    // console.log(cArr[1])
  
  
    return cArr[1];
  }
  export function checkCookie() {
    const token = getCookie();
    console.log(token)
    var name = localStorage.getItem("name");
    console.log(name)
    // console.log(ans)
    if (token != null && name != null) {
      // location.reload();
      return true;
    } else {
      return false
    }
  
  }
  export let isCookie = checkCookie()