$(document).ready(function() {
    //Hiding the slideshow on the main page
    $('#slideshow').hide();

    //Setting the "My Projects" button to change the layout and display portfolio by altering CSS, using .hide, and .append
    $('#projectsBtn').click(function() {
        //Show the slideshow
        $('#slideshow').show();

        //Change the background image
        $('body').css("background", "url('assets/images/backgrounds/projectBackground.jpg') no-repeat center center fixed");
        $('body').css("-webkit-background-size", "cover");
        $('body').css("-moz-background-size", "cover");
        $('body').css("-o-background-size", "cover");
        $('body').css("background-size", "cover");

        //Hiding elements from the home page
        $('#name').hide();
        $('#myTitle').hide();
        $('#aboutMe').hide();
        $('#projectsBtn').hide();

        //Tweaking CSS for the Projects page
        $('#resume').css("margin-top", "60px");
        $('#email').css("margin-top", "55px");
        $('#linkedin').css("margin-top", "60px");
        $('#github').css("margin-top", "55px");
        $('#github').css("margin-right", "-5px");
        $('#github').css("margin-left", "5px");
        $('#resume').css("margin-right", "260px");

        //Adding the new container for the projects page
        $('body').append('<div class="container-4"></div>');

        // Creating the Back (Home) Button
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

});