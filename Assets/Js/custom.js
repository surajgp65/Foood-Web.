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

    $('.menu-btn').click(function() {
        $('.navbar_ai .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});