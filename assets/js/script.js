const toTop = document.querySelector(".to-top");

(function($){

    var navbarScrolled = function(){
        if($("#navbar").offset().top > 100){
            $("#navbar").addClass("navbar-scrolled");
        }else {
            $("#navbar").removeClass("navbar-scrolled");
        }
    }

    navbarScrolled();
    // when the page is scrolled
    $(window).scroll(navbarScrolled);

    // for active scrollspy
    $('body').scrollspy({
        target:'#navbar',
        offset:75
    })
     
})(jQuery);

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

$(document).ready(function() {
    $(".fancybox").fancybox();
});