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
                portfolioApp.outputContent('ObjectiveManager', 'JavaScript OO, jQuery, CSS3, HTML5, CSS3 Animation, Responsive, BootStrap, GIT',
                    'After working for ObjectiveManager on their core product, I was asked to build their marketing site using up to date technologies, with the aim to keep it as lightweight as possible so that non front-end developers could still easily maintain the code if required.',
                    'port-1', 'https://about.objectivemanager.com');
                break;
            case 2:
                portfolioApp.outputContent('CycleAnalytics', 'AngularJS, NodeJS (API), CSS3, HTML5, CSS3 Animation, Responsive, BootStrap, MongoDB, GIT',
                    'I built the CycleAnalytics site as a side project to broaden my experience with building a web application end to end, featuring a NodeJS API, NodeJS data grabber and an AngularJS front-end. I managed to represent government data on the cycle hire stations within London in an easy to view format.',
                    'port-2', 'http://cycleanalytics.io', 'https://github.com/mussrya/Cycle-analytics');
                break;
            case 3:
                portfolioApp.outputContent('Reus Boostrap Theme', 'jQuery, CSS3, HTML5, CSS3 Animation, Responsive, BootStrap',
                    'As a side project and mostly for fun, I decided to build a theme for Bootstrap which I decided to post to Git for users to download for free. This was mostly a side project to try and use bootstrap to it\'s full effect.',
                    'port-3', 'http://ryan-musselwhite.com/reus/', 'https://github.com/mussrya/reus');
                break;
            case 4:
                portfolioApp.outputContent('GitRead', 'AngularJS, GitHub API, CSS3, HTML5, BootStrap',
                    'Whilst working for a company who used Git Issues to track bugs, I decided to build an application which could easily produce a release note to be sent out to the team based on a particular milestone. I mostly learnt about GitHub APIs in this project as I had extensive experience with AngularJS prior to this project.',
                    'port-4', 'https://github.com/mussrya/GitHub-Release-Notes-Generator');
                break;
        }
    });
}, portfolioApp.outputContent = function (title, skills, content, port, link, ghLink)
{
    $('body').prepend('<div class="u-portfolioEntry inactive text-center"></div>');
    setTimeout(function ()
    {
        $('.u-portfolioEntry').removeClass('inactive').addClass('active');
    }, 100);
    setTimeout(function ()
    {
        $('.u-portfolioEntry').html('<div class="row-fluid"><span class="u-closeButton u-animate">X</span><div class="col-sm-12 col-md-3" style="padding: 0;"><div class="menuBlock u-animate col-md-3"><h1 class="u-animate">'+title+'</h1><h3 class="u-animate">'+skills+'</h3><p class="u-marginTop u-animate">'+content+'</p><a href="'+link+'" class="u-animate buttonCustom">VIEW</a></div></div><div class="col-sm-12 col-md-9"><div class="u-thumbnail u-animate"><img class="img-responsive" src="/img/'+port+'/JPEG/1.jpg"></div><div class="u-thumbnail u-animate"><img class="img-responsive" src="/img/'+port+'/JPEG/2.jpg"></div><div class="u-thumbnail u-animate"><img class="img-responsive" src="/img/'+port+'/JPEG/3.jpg"></div></div></div>');
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
        }, i * 200)
    });
};