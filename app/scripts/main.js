//console.log('\'Allo \'Allo!');
$(document).ready(function() {
$('#fullpage').fullpage({
	responsiveWidth: 900,
	verticalCentered: false,
	css3: false,
	anchors: ['thisSection0', 'thisSection1', 'thisSection2', 'thisSection3'],
	navigation: true,
	paddingTop:0,
	paddingBottom:0,
	navigationPosition: 'right',
	navigationTooltips: ['Main', 'About', 'Skills', 'Contact'],
	onLeave: function(index, nextIndex, direction){				
if (index == 1) {
	$('.icons').hide();
	$('.expbgtext').hide();
	$('.contactbgtext').hide();
	$('.aboutme2').hide();
	$('.aboutme').hide();
	$('.aboutme3').hide();
	$('#second').addClass('animated bounceInUp');
	setTimeout(function () {
    $('.aboutbgtext').addClass('animated rubberBand');}, 1000
);
	setTimeout(function () {
    $('.aboutme').show().addClass('animated fadeInDown');}, 1000
);
	setTimeout(function () {
    $('.aboutme2').show().addClass('animated fadeInDown');}, 500
);
	setTimeout(function () {
    $('.aboutme3').show().addClass('animated fadeInDown');}, 1500
);
}
if (index == 2) {
	$('.expbgtext').show();
	$('.contactbgtext').hide();
	$('.icons').hide();
	$('#third').addClass('animated bounceInUp');
	setTimeout(function () {
    $('.expbgtext').addClass('animated rubberBand');}, 1000
);
}
if (index == 3) {
	$('.contactbgtext').hide();
	$('.icons').show();
	$('.contactbgtext').show();
	$('#fourth').addClass('animated bounceInUp');
	setTimeout(function () {
    $('.contactbgtext').addClass('animated rubberBand');}, 1000
);
}
		

//});
//});
	
d3.select('#bar').transition()
    .duration(1000)
    .tween('width', function() {
      var i = d3.interpolate(100, 300);
      var ci = d3.interpolate('#A2583B', '#73A39B');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };      
    });
    
d3.select('#bar2').transition()
    .duration(1500)
    .tween('width', function() {
      var i = d3.interpolate(100, 275);
      var ci = d3.interpolate('#A2583B', '#73A39B');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };
	});
		
d3.select('#bar3').transition()
    .duration(2000)
    .tween('width', function() {
      var i = d3.interpolate(100, 200);
      var ci = d3.interpolate('#A2583B', '#73A39B');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };
    });
d3.select('#bar4').transition()
    .duration(2500)
    .tween('width', function() {
      var i = d3.interpolate(100, 160);
      var ci = d3.interpolate('#A2583B', '#73A39B');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };
    });
		
		
/*about content*/
$(function(){
    $('.aboutp').hide();
	$('.aboutp2').hide();
	$('.aboutp3').hide();
	$('.abouth4').hide();
	$('.about2h4').hide();
	$('.about3h4').hide();
});

var clicked=true;
$('.aboutme').on('click', function(){  //,".aboutpic"
    if(clicked)
    {
        clicked=false;
        $('.aboutme').animate({height: '255'});
		$('.aboutp').hide();
		$('.abouth4').hide();
    }
    else
    {
        clicked=true;
        $('.aboutme').animate({height: '500'});
		$('.aboutp').show();
		$('.abouth4').show();
    }
});

var clicked=true;
$('.aboutme2').on('click', function(){  //,".aboutpic"
    if(clicked)
    {
        clicked=false;
        $('.aboutme2').animate({height: '255'});
		$('.aboutp2').hide();
		$('.about2h4').hide();
    }
    else
    {
        clicked=true;
        $('.aboutme2').animate({height: '500'});
		$('.aboutp2').show();
		$('.about2h4').show();
    }
});


var clicked=true;
$('.aboutme3').on('click', function(){  //,".aboutpic"
    if(clicked)
    {
        clicked=false;
        $('.aboutme3').animate({height: '255'});
		$('.aboutp3').hide();
		$('.about3h4').hide();
    }
    else
    {
        clicked=true;
        $('.aboutme3').animate({height: '500'});
		$('.aboutp3').show();
		$('.about3h4').show();
    }
});
/*end about content*/

 }
}); //fullpage function close
});
		
/*typewrite text*/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1500;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
        document.body.appendChild(css);
    };


