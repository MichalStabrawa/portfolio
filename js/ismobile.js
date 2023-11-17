const phoneLink = document.querySelector("a.phone");

const isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ) {
    return null;
  } else {
    
    handleEvent(phoneLink,'click',phonePrevent);
  }
};

const phonePrevent = (e) => {
  e.preventDefault();
  alert('Dziala');
};

const handleEvent = (element,event,value) => {
  element.addEventListener(event, value);
};

export {
  isMobile,handleEvent
};

