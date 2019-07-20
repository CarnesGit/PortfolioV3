$(document).ready(function() {
    //Hiding the slideshow on the main page
    $('#slideshow').hide();

    //Setting the "My Projects" button to change the layout and display portfolio by altering CSS, using .hide, and .append
    $('#projectsBtn').click(function() {
        $('#slideshow').show();
        $('body').css("background", "url('assets/images/backgrounds/projectBackground.jpg') no-repeat center center fixed");
        $('body').css("-webkit-background-size", "cover");
        $('body').css("-moz-background-size", "cover");
        $('body').css("-o-background-size", "cover");
        $('body').css("background-size", "cover");
        $('#name').hide();
        $('#myTitle').hide();
        $('#aboutMe').hide();
        $('#projectsBtn').hide();
        $('#resume').css("margin-top", "60px");
        $('#email').css("margin-top", "60px");
        $('#linkedin').css("margin-top", "60px");
        $('#github').css("margin-top", "60px");
        $('#resume').css("margin-right", "260px");
        $('body').append('<div class="container-4"></div>');
        // $('.container-4').append('<div class="box-6"></div>');
        $('.container-1').prepend('<button id="backBtn" type="button">Home</button>');

        //Asigning code to the "Back" button to function as expected
        $('#backBtn').click(function() {
            location.reload();
        });
    });

    //Adding function for the slideshow
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    $('.next').click(function() {
        plusSlides(1);
    });

    $('.prev').click(function() {
        plusSlides(-1);
    });

    $('#dot-1').click(function() {
        currentSlide(1);
    });

    $('#dot-2').click(function() {
        currentSlide(2);
    });

    $('#dot-3').click(function() {
        currentSlide(3);
    });

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    $('#hangCode').click(function() {
        location.reload();
    });

});