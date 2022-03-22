// NAVIGATION
initializeStellarNav(1, '.main_menu');
function initializeStellarNav(index, element) {
	$(element).stellarNav({
		breakpoint: 1024,
		position: 'left'
	});
}


 //Add Class Sticky On Scroll
 $(window).on('scroll', function (event) {
 	var scroll = $(window).scrollTop();
 	if (scroll < 20) {
 		$("header").removeClass("sticky");
    } 
    else {
        $("header").addClass("sticky");
    }
});

//Apply-now-modal-end
// GET IN TOUCH MODAL JS
const popup = document.getElementById('popup-wrapper');
const btn = document.querySelectorAll(".popup-btn");

btn.forEach((e)=>{
  e.addEventListener('click',function(){
    popup.classList.add('show');
  })
})
const span = document.getElementById("close");
if(span){
  span.addEventListener('click', () => {
    popup.classList.remove('show');
  });
}
window.onclick = function(event) {
  if (event.target == popup) {
    popup.classList.remove('show');
  }
}

//Apply-now-modal

//input-file-js-start
$(document).ready(function() {
  $('.btn').on('click', function() {
    $('.file').trigger('click');
  });

  $('.file').on('change', function() {
    var fileName = $(this)[0].files[0].name;    
    $('#file-name').val(fileName);
  });
})

//input-file-js-end


// Counter Js
$('.digit').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//load-more-btn-start
$(document).ready(function() {
    $('.loadMore').click(function() {
        $('.gallery-portfolio').slideToggle('fast');
    });
});
//load-more-btn-end



// Parallax-Img
var scene = document.getElementById('js-parallax-scene1');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-parallax-scene2');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-parallax-scene3');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-parallax-scene4');
var parallax = new Parallax(scene);
