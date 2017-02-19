console.log('\'Allo \'Allo!');
	
d3.select('#bar').transition()
    .duration(3000)
    .tween('width', function() {
      var i = d3.interpolate(50, 350);
      var ci = d3.interpolate('#FFF', '#E82792');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };      
    });
    
d3.select('#bar2').transition()
    .duration(3000)
    .tween('width', function() {
      var i = d3.interpolate(50, 300);
      var ci = d3.interpolate('#FFF', '#DD17FF');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };
	});
		
d3.select('#bar3').transition()
    .duration(3000)
    .tween('width', function() {
      var i = d3.interpolate(50, 500);
      var ci = d3.interpolate('#FFF', '#7009E8');
      return function(t) {
          this.style.width = i(t) + 'px';
          this.style.background = ci(t);
      };
    });
d3.select('#bar4').transition()
    .duration(3000)
    .tween('width', function() {
      var i = d3.interpolate(50, 400);
      var ci = d3.interpolate('#FFF', '#1C0AFF');
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
