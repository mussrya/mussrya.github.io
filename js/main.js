/*
 Ryan Musselwhite's Portfolio JS

 */

// Primary Object Definition
var portfolioApp = portfolioApp || {};

// Run the various click handlers on page load
$(function ()
{
    portfolioApp.contentClick();
    portfolioApp.animateContent();
});

portfolioApp.contentClick = function ()
{
    $('.u-hoverBlock').click(function ()
    {
        switch ($(this).data('entry')) {
            case 1:
                portfolioApp.outputContent('Objective Manager', 'JavaScript OO, CSS3, HTML5, Animation, BootStrap',
                    'This project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla bla',
                    'port-1');
                break;
            case 2:
                portfolioApp.outputContent('CycleAnalytics', 'AngularJS, NodeJS, CSS3, HTML5, Animation, BootStrap',
                    'This project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla bla',
                    'port-2');
                break;
            case 3:
                portfolioApp.outputContent('Reus Boostrap Theme', 'jQuery, CSS3, HTML5, Animation, BootStrap',
                    'This project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla bla',
                    'port-3');
                break;
            case 4:
                portfolioApp.outputContent('GitRead', 'AngularJS, GitHub API, CSS3, HTML5, BootStrap',
                    'This project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla blaThis project was an example of how I managed to bla bla bla bla',
                    'port-4');
                break;
        }
    });
}, portfolioApp.outputContent = function (title, skills, content, port)
{
    $('body').prepend('<div class="u-portfolioEntry inactive text-center"></div>');
    setTimeout(function ()
    {
        $('.u-portfolioEntry').removeClass('inactive').addClass('active');
    }, 100);
    setTimeout(function ()
    {
        $('.u-portfolioEntry').html('<div class="row-fluid"><div class="col-md-3" style="padding: 0;height: 100%;"><div class="menuBlock col-md-3"><h1 class="u-animate">'+title+'</h1><h3 class="u-animate">'+skills+'</h3><p class="u-marginTop u-animate">'+content+'</p></div></div><div class="col-md-9"><span class="u-closeButton u-animate">X</span><div class="col-lg-12 u-animate"><div class="u-thumbnail"><img class="img-responsive" src="/portfolio/img/'+port+'/JPEG/1.jpg"></div></div><div class="col-lg-12 u-animate"><div class="u-thumbnail"><img class="img-responsive" src="/portfolio/img/'+port+'/JPEG/1.jpg"></div></div><div class="col-lg-12 u-animate"><div class="u-thumbnail"><img class="img-responsive" src="/portfolio/img/'+port+'/JPEG/1.jpg"></div></div></div></div>');
        $('.u-closeButton').unbind('click').bind('click', function ()
        {
            portfolioApp.removeContent();
        });
        portfolioApp.animateContent();
    }, 700);
}, portfolioApp.removeContent = function ()
{
    $('.u-portfolioEntry').removeClass('active').addClass('inactive');
    setTimeout(function ()
    {
        $('.u-portfolioEntry').remove()
    }, 1000);
}, portfolioApp.animateContent = function ()
{
    $('.u-animate').each(function (i)
    {
        var that = $(this);
        setTimeout(function ()
        {
            that.removeClass('u-animate').addClass('u-animated');
        }, i * 300)
    });
};