$(document).ready(function(){$('a[name=modal]').click(function(e){e.preventDefault();var id='#dialog';var maskHeight=$(document).height();var maskWidth=$(window).width();$('#mask').css({'width':maskWidth,'height':maskHeight});$('#mask').fadeIn(1000);$('#mask').fadeTo("slow",0.7);var winH=$(window).height();var winW=$(window).width();$(id).css('top',winH*0.17);$(id).css('left',winW/2-$(id).width()/2);$(id).fadeIn(1000);});$('.window .close').click(function(e){e.preventDefault();$('#mask, .window').hide();});$('#mask').click(function(){$(this).hide();$('.window').hide();});});