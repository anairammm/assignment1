//console.log('\'Allo \'Allo!');
$(document).ready(function() {
$('#fullpage').fullpage({
	responsiveWidth: 640,
	verticalCentered: false,
	css3: false,
	anchors: ['firstPage', 'secondPage', '3rdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Main', 'About', 'Education', 'Experience', 'Skills', 'Contact'],
	onLeave: function(index, nextIndex, direction){	
if (index == 1) {
    $('.h_two').addClass('animated fadeInRightBig');
	$('.text2').addClass('animated bounceInUp');
	$('.divider').addClass('animated zoomIn');
	$('#second').addClass('animated bounceInUp');
}
/*else if(index == 2 && direction == 'up'){
	$('.h_two').removeClass('animated fadeInUp');
	$('.text2').removeClass('animated fadeInDown');
	$('.divider').removeClass('animated fadeOut');
}*/
if (index == 2) {
    $('.h_three').addClass('animated fadeInLeft');
	$('.text3').addClass('animated zoomInRight');
	$('.text3_1').addClass('animated zoomInLeft');
	$('.divider').addClass('animated zoomIn');
}
if (index == 3) {
    $('.h_four').addClass('animated fadeInRight');
	$('.text4').addClass('animated fadeInUp');
	$('.divider').addClass('animated zoomIn');
}
if (index == 4) {
    $('.h_five').addClass('animated fadeInLeft');
	$('#bar', '#bar2', '#bar3', '#bar4').addClass('animated fadeInUp');
	$('.divider').addClass('animated zoomIn');
}
if (index == 5) {
    $('.h_five').addClass('animated fadeInLeft');
	$('#bar', '#bar2', '#bar3', '#bar4').addClass('animated fadeInUp');
	$('.divider').addClass('animated zoomIn');
}
		
d3.select('#bar').transition()
    .duration(1000)
    .tween('width', function() {
      var i = d3.interpolate(100, 300);
      var ci = d3.interpolate('#73A39B', '#A2583B');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };      
    });
	});
    
d3.select('#bar2').transition()
    .duration(1500)
    .tween('width', function() {
      var i = d3.interpolate(100, 275);
      var ci = d3.interpolate('#73A39B', '#A2583B');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };
	});
		
d3.select('#bar3').transition()
    .duration(2000)
    .tween('width', function() {
      var i = d3.interpolate(100, 200);
      var ci = d3.interpolate('#73A39B', '#A2583B');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };
    });
d3.select('#bar4').transition()
    .duration(2500)
    .tween('width', function() {
      var i = d3.interpolate(100, 160);
      var ci = d3.interpolate('#73A39B', '#A2583B');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };
    });
	}
}
});

/*typewrite text*/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
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
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

/*var i = 0;
var data = [
	'<title>MarianaNuman | WebDesigner</title>'
];

d3.select('svg').on('load', function () {
    transition();
});

function transition() {
	d3.select('text').attr('align','center')
    d3.select('text').transition()
        .duration(7000)
        .ease('bounce-out')
        .tween('text', function () {
            var newText = data[i];
            var textLength = newText.length;
            return function (t) {
                this.textContent = newText.substr(0, 
                                   Math.round( t * textLength) );
            };
        });
    
    i = (i + 1) % data.length;
}*/

/*full page javascript demo*/
