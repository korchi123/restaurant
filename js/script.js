'use strict'

//==========================jQuery==================================

function btnActive() {

  if ($(window).scrollTop() > $(window).outerHeight())
    $('.button-up').fadeIn(500);
  else
    $('.button-up').fadeOut(500);
};

function ibg() {

  $.each($('.outsite'), function (index, val) {
    if ($(this).find('Stores').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('Stores').attr('src') + '")');
    }
  });
};

$(document).ready(function () {
  //==========кнопка скролл вверх================
  btnActive();
  $(window).on('scroll', btnActive);

  $('.button-up').click(function () {
    $('html').animate({
      scrollTop: $('#h').offset().top
    }, 500);
  });
  //===============лист языков

  $('.form2').mousedown(function () {  //отмена выделение текста
    return false;
  });

  $('html').click(function () {        //скрыть лист языков при клике на документ

    $('.select1').slideUp(100);
    if ($('.span1').hasClass('rotate'))
      $('.span1').removeClass('rotate');
  });

  $('.form2').on('click', function () {

    $('.select1').slideToggle(100);
    $('.span1').toggleClass('rotate');
    return false;
  });

  $('.select1').on('click', 'p', function () {

    //let $temp = $('.language-active p').text();
    //$('.language-active p').text($(this).text());
    //$(this).text($temp);

    $('.select1 option').insertBefore($(this));
    $(this).prependTo($('.select1'));
  });

  ibg();

});

//=========JS========================================================
/*
function btnActive() {

    if (pageYOffset > document.documentElement.clientHeight)
       document.querySelector('.button-up').classList.add("button-up-active");
     else
       document.querySelector('.button-up').classList.remove("button-up-active");
};

btnActive();
window.addEventListener('scroll', btnActive);
*/

//=========================================================================================
/*
document.querySelector(".button-up").onclick = function () {

  document.querySelector("#h").scrollIntoView({ block: "start", behavior: "smooth" });
}

//=========================================================================================
document.querySelector('.language-list').onmousedown = function (event) {
  return false;
}

//===============================================================================

document.onclick = function (event) {

  if (event.target.closest(".language-list")) return;
  if (!document.querySelector('.ul.hidden')) {
    document.querySelector('.ul').classList.add("hidden");
    document.querySelector('.language-list__img-2.rotate').classList.remove("rotate");
  }
}

//====================================================================================
document.querySelector(".language-list").onclick = function (event) {

  document.querySelector('.ul').classList.toggle("hidden");
  document.querySelector('.language-list__img-2').classList.toggle("rotate");
};

$(document).ready(function() {
    $('.language-list').on('click', function() {

        $('.ul').toggleClass('hidden');
        $('.language-list__img-2').toggleClass('rotate');
        return false;
    });
});

document.querySelector(".ul").onclick = function (event) {

  let temp = document.querySelector(".language-active").innerHTML;
  document.querySelector(".language-active").innerHTML = event.target.innerHTML;

  event.target.innerHTML = temp;

}
//===================================================================================

function ibg() {
  for(let i of document.querySelectorAll(".ibg img")) {

    let src = i.getAttribute('src');
    i.closest(".ibg").style.backgroundImage = `url( '${src}')`;
    i.src = " ";
  }
}

ibg();
*/


let placeholder = document.querySelector('.search__form>input').getAttribute('placeholder');

document.querySelector('.search__form>input').addEventListener('focus', function(event) {


     event.target.setAttribute('placeholder', '');
});
document.querySelector('.search__form>input').addEventListener('blur', function(event) {

     event.target.setAttribute('placeholder', placeholder);
});