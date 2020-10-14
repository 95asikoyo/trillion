$(document).ready(function(){
    $("section").height($(window).height())
    onWindoResize();

    $(".obss-scroller").smoothScroller({
        duration:  1000,
        activeClass: "active"
    })
});

var onWindoResize = function(){
    $(window).resize(function(evt){
        $("section").height($(window).height());
    })
}

// smooth scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });

  $("#top").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 2500);
  });
});


const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removeBorder();
  removeShow();
  // Add border to current tab item
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}

// Listen for tab item click
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

