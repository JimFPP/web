$(function() {
    $('#cssmenu').on('click', 'a', function(event){

        if($(event.currentTarget).attr('href').startsWith('#'))
        {       
             event.preventDefault();
        }
        $('.active').removeClass('active');
        $(event.currentTarget).parent().addClass('active');

        console.log($(event.currentTarget).attr('href'));

        $('html, body').animate({
            scrollTop: $($(event.currentTarget).attr('href')).offset().top
        }, 1000);
    });

    $('#button').on('click',  function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() < 300) {
            $('#button').addClass('fade');
        }else{
            $('#button').removeClass('fade hide');
        }
    });

});

