'use strict';

 {
  const element = document.getElementById('backtop');
  window.addEventListener('scroll',function() {
    let scroll = window.scrollY;
    // console.log(scroll);
    if (scroll > 350) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
  element.addEventListener('click',function() {
    window.scrollTo ({
      top:0,
      behavior:'smooth'
    });
  });

  const ham = document.getElementById('ham');
  const nav = document.querySelector('.header__nav-body');
  const bars = document.querySelectorAll('.header__bar');

  ham.addEventListener('click',function() {
    nav.classList.toggle('open');
    bars.forEach(bar => {
      if(bar.classList.contains('active') === false) {
        bar.classList.add('active');
      } else {
        bar.classList.remove('active');
      }
    });
  });
 }