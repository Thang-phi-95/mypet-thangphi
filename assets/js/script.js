// const nav = document.querySelector("nav");
const header = document.querySelector(".header");
const header2 = document.querySelector(".header2");
const headerMain = document.querySelector(".header__main");
const slider = document.querySelector(".slider");
const groupSearch = document.querySelector(".group__nav-right--search");
const listCart = document.querySelector(".list__cart");
const navMenulistSub = document.querySelector(".nav__menu-list--sub");
const navMenulistSub2 = document.querySelector(".nav__menu2-list--sub");
const navHeight = headerMain.getBoundingClientRect().height;
const navSticky = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
    groupSearch.style.height = "10rem";
    listCart.style.top = "12.2rem";
  } else {
    header.classList.remove("sticky");
    groupSearch.style.height = "13.5rem";
    listCart.style.top = "13.6rem";
  }
};
const headerObserver = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(slider);
const navSticky2 = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header2.classList.add("sticky");
    groupSearch.style.height = "10rem";
    listCart.style.top = "7.7rem";
    navMenulistSub2.style.top = "4rem";
  } else {
    header2.classList.remove("sticky");
    groupSearch.style.height = "13.5rem";
    listCart.style.top = "7.7rem";
    navMenulistSub2.style.top = "9.7rem";
  }
};
const headerObserver2 = new IntersectionObserver(navSticky2, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver2.observe(slider);
const iconClose = document.querySelector(".overlays__input-icon--close");
const ovl = document.querySelector(".overlays");
const searchIcon = document.querySelector(".nav__menu-list--item---search");
searchIcon.addEventListener("click", () => {
  ovl.classList.remove("hidden2");
});
iconClose.addEventListener("click", function () {
  ovl.classList.add("hidden2");
});

// menu-mobile
const menuMobile = document.querySelector(".menu__mobile");
const navmenu = document.querySelector(".nav__menu");
const overlayMobile = document.querySelector(".menu__mobile-overlay");
menuMobile.addEventListener("click", () => {
  navmenu.classList.toggle("visiteds");
  overlayMobile.classList.toggle("visiteds");
});
overlayMobile.addEventListener("click", () => {
  overlayMobile.classList.remove("visiteds");
  navmenu.classList.remove("visiteds");
});

/*----------scroom-top-----------*/
const scroomTop = document.querySelector(".scroon-top");

const topBar = document.querySelector(".topbar");

scroomTop.addEventListener("click", function (e) {
  e.preventDefault();

  if (true) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
