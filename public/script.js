'use strict';

 {
  const element = document.getElementById('backtop');
  window.addEventListener('scroll',function() {
    let scroll = window.scrollY;
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

  const animationElements = document.querySelectorAll('.animation');

  function fadeIn() {
    animationElements.forEach(element => {
      const targetShow = window.innerHeight / 2;
     const elementTop =  element.getBoundingClientRect().top;
      if (targetShow > elementTop) {
        element.classList.add('scroll-in');
      }
    });
  }
  
  window.addEventListener('scroll',fadeIn);
    
}