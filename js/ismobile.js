const phoneLink = document.querySelector("a.phone");

const isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
      alert(navigator.userAgent);
  } else {
    // false for not mobile device
    console.log(phoneLink);
    linkPrevDefault(phoneLink);
  }
};

const phonePrevent = (event) => {
  event.preventDefault();
};

const linkPrevDefault = (e) => {
  e.addEventListener("click", phonePrevent);
};

export { isMobile };
