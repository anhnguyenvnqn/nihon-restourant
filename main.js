const headerIcon = document.querySelector(".header_icon")
const navMobile = document.querySelector(".nav__mobile")
const navMobileClose = document.querySelector(".nav__mobile-header-close")

headerIcon.addEventListener("click" , function () {
  navMobile.style.display= "block";
  
  
})
navMobileClose.addEventListener("click", function () {
  navMobile.style.display= "none";
  
})

// const toP = this.document.querySelector(".top");
// window.addEventListener("scroll", function () {
//   const x = this.pageYOffset;
//   if (x > 80) {
//     toP.classList.add("active");
//   } else {
//     toP.classList.remove("active");
//   }
// });


// menu
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function (x) {
  if (x.target.classList.contains("menu-button")) {
    const Target = x.target.getAttribute("data-title");
    menuTitle.querySelector(".active").classList.remove("active");
    x.target.classList.add("active");

    const menuItem = document.querySelector("#menu");
    menuItem
      .querySelector(".menu-item-content.active")
      .classList.remove("active");
    menuItem.querySelector(Target).classList.add("active");
  }
});

//modal
var modal = document.querySelector(".modal");
var openModal = document.querySelector(".big_image-content-btn");
var iconclose = document.querySelector(".icon-close");
var btnSend = document.querySelector(".modal-container button");
function toggleModal(e) {
  modal.classList.toggle("hiden");
}

openModal.addEventListener("click", toggleModal);
iconclose.addEventListener("click", toggleModal);
btnSend.addEventListener("click", toggleModal);

modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});

// about slide image
var images = document.querySelectorAll(".about_wraper img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".about_gallery__close");
var galleryImg = document.querySelector(".about_gallery__inner img");
var gallery = document.querySelector(".about_gallery");

curentIndex = 0;
function showGallery() {
  galleryImg.src = images[curentIndex].src;
  gallery.classList.add("show");
  if (curentIndex == 0) {
    prev.classList.add("hide");
  } else prev.classList.remove("hide");
  if (curentIndex == images.length - 1) {
    next.classList.add("hide");
  } else next.classList.remove("hide");
}
images.forEach(function (item, index) {
  item.addEventListener("click", function () {
    console.log(index);
    curentIndex = index;
    showGallery();
  });
});
close.addEventListener("click", function () {
  gallery.classList.remove("show");
});

prev.addEventListener("click", function () {
  if (curentIndex > 0) {
    curentIndex--;
    showGallery();
  }
});
next.addEventListener("click", function () {
  if (curentIndex < images.length - 1) {
    curentIndex++;
    showGallery();
  }
});

// escHandle
var escHandle = document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
    modal.classList.add("hiden");
    document.querySelector(".menu-items").classList.remove("active");
    menuBar.classList.remove("active");
  
  }
});

/* Scroll Down */
var btnGoTop = document.getElementById("btnGoTop");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnGoTop.style.display = "block";
  } else {
    btnGoTop.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
btnGoTop.addEventListener("click",function() {
  topFunction()
})
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
