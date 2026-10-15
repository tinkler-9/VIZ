d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
  .then(function(data){
    var points = d3.select('svg')
                .selectAll("circle")
                .data(data);
    points.join("circle")
            .attr("cx", function(d){return d.Xi;})
            .attr("cy", function(d){return d.Yi;})
            .attr("r", 10)
            .style('fill', function(d){return d.color;})
            .transition().duration(2500)
            .attr("cx", function(d){return d.Xf;})
            .attr("cy", function(d){return d.Yf;})
    })
   .catch(function(error){
        //d3.select('svg').append('text').attr('x',50).attr('y', 50).text("ERROR!")
        alert('ERROR!')
    });
  