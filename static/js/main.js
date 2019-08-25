---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.blog-button').click(function () {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    $('.content-wrapper').attr('style', 'display: block')
  })

  $('.side-nav-btn').click(clickSideNavbar)

  function clickSideNavbar () {
    if($('.side-nav-btn').hasClass('side-nav-btn-corner')) {
      $('.side-navbar').attr('style', 'display: block')
    } else if ($('.side-nav-btn').hasClass('side-nav-btn-bar')) {
      $('.side-navbar').attr('style', 'display: none')
    }
    $('.side-nav-btn').toggleClass('side-nav-btn-bar side-nav-btn-corner')
    $('.side-navbar').toggleClass('animated go-up')
    $('.side-nav-btn').children('span').toggleClass('fa fa-cog')
  }

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.content-wrapper').attr('style', 'display: block')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.content-wrapper').attr('style', 'display: block')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.backToTop').click(smoothscroll)

  function smoothscroll(){
    if($('.side-nav-btn').hasClass('side-nav-btn-bar')) clickSideNavbar()
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll)
         window.scrollTo (0,currentScroll - (currentScroll/5))
    } else {
    }
  }

})
