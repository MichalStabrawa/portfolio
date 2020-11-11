function isMobile () {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        alert("mobile device");
      }else{
        // false for not mobile device
        alert("not mobile device");
      }
}

export {isMobile}