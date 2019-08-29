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

  new ClipboardJS('.copy-here');

  $('.side-nav-btn').click(clickSideNavbar)

  function clickSideNavbar () {
    if($('.side-nav-btn').hasClass('side-nav-btn-corner')) {
      $('.side-navbar').attr('style', 'display: block')
    } else if ($('.side-nav-btn').hasClass('side-nav-btn-bar')) {
      $('.side-navbar').attr('style', 'display: none')
    }
    $('.side-nav-btn').toggleClass('side-nav-btn-bar side-nav-btn-corner')
    $('.side-navbar').toggleClass('animated go-up')
    $('.side-nav-btn').children('div').toggleClass('fade-in fade-out')
  }

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.content-wrapper').attr('style', 'display: block')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.content-wrapper').attr('style', 'display: block')
  }

  // $('.btn-mobile-menu__icon').click(function () {
  //   $('.navigation-wrapper').toggleClass('visible bounceInRight')
  //   $('.btn-mobile-menu__icon').toggleClass('fa-close fa-bars animated fadeIn')
  //   $('.btn-mobile-menu').toggleClass('btn-mobile-menu-fade')
  // })

  // $('.navigation-wrapper .blog-button').click(function () {
  //   $('.navigation-wrapper').toggleClass('visible bounceInRight')
  //   $('.btn-mobile-menu__icon').toggleClass('fa-close fa-bars animated fadeIn')
  //   $('.btn-mobile-menu').toggleClass('btn-mobile-menu-fade')
  // })

  $('.visit').click(function () {
    window.open("https://github.com/{{ site.author.github_username }}")
  })

  $('.mail-to').click(function () {
    window.location.href="mailto:{{ site.author.github_username }}"
  })

  $('.backToTop').click(smoothscroll)

  function smoothscroll(){
    if($('.side-nav-btn').hasClass('side-nav-btn-bar')) clickSideNavbar()
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll)
         window.scrollTo (0,currentScroll - (currentScroll/5))
    }
  }

})
