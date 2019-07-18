$(document).ready(function() {
    //Setting the "My Projects" button to change the layout and display portfolio by altering CSS, using .hide, and .append
    $('#projectsBtn').click(function() {
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
        $('.container-4').append('<div class="box-6"></div>');
        $('.box-6').append('<button id="backBtn" type="button">Back</button>');




        //Asigning code to the "Back" button to function as expected
        $('#backBtn').click(function() {
            location.reload();
        });
    });


});