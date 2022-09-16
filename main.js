let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// var section = document.querySelectorAll('section');
// var navLinks = document.querySelectorAll('header nav a');


// window.onscroll = () =>{

//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');

//     section.forEach(sec =>{

//       let top = window.scrollY;
//       let height = sec.offsetHeight;
//       let offset = sec.offsetTop - 150;
//       let id = sec.getAttribute('#id');

//       if(top => offset && top < offset + height){
//         navLinks.forEach(links => {
//           links.classList.remove('active');
//           document.querySelector('nav a[href*='+id+']').classList.add('active')
//         });
//       };
//     });
// }




var sections = document.querySelectorAll("section");

onscroll = function(){
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop - section.offsetHeight 
          *0.25 && 
          scrollPosition < section.offsetTop + section.offsetHeight 
          -section.offsetHeight *0.25
            ) {
                var currentId = section.attributes.id.value
                removeAllActiveClasses();
                addActiveClasses(currentId);
            }
    });
};

var removeAllActiveClasses = function () {
    document.querySelectorAll("nav a").forEach((el) => {
        el.classList.remove("active");
    });
};
var addActiveClasses = function (id) {
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
};






document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });