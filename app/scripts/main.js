//console.log('\'Allo \'Allo!');
$('#fullpage').fullpage({
	responsiveWidth: 640,
	css3: true,
	anchors: ['firstPage', 'secondPage', '3rdPage', 'fourthPage', 'fifthPage'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Main', 'About', 'Education', 'Experience', 'Skills'],
	onLeave: function(index, nextIndex, direction){	
if (index == 1) {
    $('.h_two').addClass('animated fadeInRightBig');
	$('.text2').addClass('animated bounceInUp');
	$('.divider').addClass('animated zoomIn');
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
