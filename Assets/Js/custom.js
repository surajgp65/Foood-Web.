$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar_ai').addClass('sticky');
            document.getElementById("logo").innerHTML = "F.";
        } else {
            $('.navbar_ai').removeClass('sticky');
            document.getElementById("logo").innerHTML = "Foood Web.";
        }
    });

    // Toggle menu/navbar script

    $('.navbar-toggler').click(function() {
        $('.navbar_ai .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});

jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 600) {
            $('.navbar_ai').addClass('bg-dark');
        } else if (ww >= 601) {
            $('.navbar_ai').removeClass('bg-dark');
        };
    };
    $(window).resize(function() {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});