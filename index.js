/* scrollefeet */

let linkEls = document.querySelectorAll("nav ul li a");
for (let item of linkEls) {
  item.addEventListener("click", smoothScroll);

  // item.className = "unselected";
}

function smoothScroll(event) {
  event.preventDefault();

  this.className = "selected";
  let targetID = event.target.getAttribute("href");
  let sectionSelected = document.querySelector(targetID);
  let originalTop = sectionSelected.getBoundingClientRect().top - 160; //Math.floor could be used
  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  //console.log(originalTop);
}

window.addEventListener("load", function () {
  let posts = document.querySelectorAll("section");
  let postTops = [];
  let pageTop;
  let counter = 1;
  let prevCounter = 1;
  let doneResizing;

  /* This is replaced by the reset function - posts.forEach(function(post){
        postTops.push(  Math.floor(post.getBoundingClientRect().top + window.pageYOffset));
      }) */
  resetPagePosition();

  window.addEventListener("scroll", function () {
    pageTop = Math.floor(window.pageYOffset + 200);
    //console.log(pageTop);
    if (pageTop > postTops[counter]) {
      counter++;
      //console.log(`scrolling down ${counter}`)
    } else if (counter > 1 && pageTop < postTops[counter - 1]) {
      counter--;
      //console.log(`scrolling up ${counter}`);
    }
    if (counter != prevCounter) {
      linkEls.forEach(function (links) {
        links.removeAttribute("class");
        const thisLink = document.querySelector(
          `nav ul li:nth-child(${counter}) a`
        );
        // thisLink.className = "selected";
        prevCounter = counter;
      });
    }
  });
  window.addEventListener("resize", function () {
    clearTimeout(doneResizing);
    doneResizing = setTimeout(function () {
      //console.log("done resizing!");
    }, 500);
  });
  function resetPagePosition() {
    postTops = [];
    posts.forEach(function (post) {
      postTops.push(
        Math.floor(post.getBoundingClientRect().top + window.pageYOffset)
      );
    });
    const pagePos = window.pageYOffset + 200;
    counter = 0;
    postTops.forEach(function (post) {
      if (pagePos > post) {
        counter++;

        let thisLink = document.querySelector(
          `nav ul li:nth-child(${counter}) a`
        );
        //thisLink.className = "selected";
      }
    });
    linkEls.forEach(function (links) {
      links.removeAttribute("class");
    });
  }
});

/* $(window).on("load", function () {
  $(".flexslider").flexslider({
    animation: "slide",
    slideshowSpeed: 2000,
    direction: "horizontal",
    reverse: true,
    pauseOnHover: true,
  });
});
(function () {
  "use strict";
  $("#tabs > ul > li > a").click(function () {
    $("#tabs > ul > li > a").css({
      background: "#a2a2a2",
      color: "#cecece",
    });
    $(this).css({
      background: "#eaeaea",
      color: "#333",
    });
    const thisTab = $(this).attr("href");
    $("#tabs > div:visible").fadeOut(200, function () {
      $(thisTab).fadeIn(200);
    });
  });
})(); */

//swiperjs

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    //disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

(function () {
  "use strict";
  let counter = 1;
  function contentRotator() {
    //counter++;
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(1000, function () {
      if ($(this).is("#rotator blockquote:last-child")) {
        setTimeout(function () {
          $(`#rotator blockquote:nth-child(${counter})`).fadeOut(
            1000,
            function () {
              counter = 1;
              contentRotator();
            }
          );
        }, 2000);
      } else {
        setTimeout(function () {
          $(`#rotator blockquote:nth-child(${counter})`).fadeOut(
            1000,
            function () {
              counter++;
              contentRotator();
            }
          );
        }, 2000);
      }
    });
  }
  contentRotator();
})();

//slider cdn
