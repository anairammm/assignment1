//console.log('\'Allo \'Allo!');
$(document).ready(function() {
    $('#fullpage').fullpage();
});	

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



var i = 0;
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
}

/*full page javascript demo*/
