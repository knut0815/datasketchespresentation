pt.extraDetailTop2000 = pt.extraDetailTop2000 || {};

pt.extraDetailTop2000.init = function() {

    pt.extraDetailTop2000.svg = d3.select("#extra-detail-top-2000 #top_2000_svg");

}//init


pt.extraDetailTop2000.resetSVG = function() {
    //Hide all the parts that are "details"
    pt.extraDetailTop2000.svg.selectAll("#titleIntro, #legendVinyl, #bowieText, #princeText, #beatlesText, #uniqueText g, #topText g, #bottom, #unique *, #prince *, #bowie *, #beatles *")
        .style("opacity", 0);

    //Move the legends to different position and make them bigger
    pt.extraDetailTop2000.svg.select("#legendSize").attr("transform","scale(2)translate(0,-350)");
    pt.extraDetailTop2000.svg.select("#legendColor")
        .attr("transform","scale(2)translate(550,-150)")
        .style("opacity", 0);
}//resetSVG


pt.extraDetailTop2000.showColorLegend = function() {
    //In case you move backward
    pt.extraDetailTop2000.svg.select("#legendSize")
        .transition().duration(750)
        .attr("transform","scale(2)translate(0,-350)");
    //Hide Bowie & Prince songs again
    pt.extraDetailTop2000.svg.selectAll("#bowie *, #annotation #bowieText, #prince *, #annotation #princeText")
        .transition().duration(500)
        .style("opacity", 0);

    //Show the color legend
    pt.extraDetailTop2000.svg.select("#legendColor")
        .transition().duration(750)
        .attr("transform","scale(2)translate(550,-150)")
        .style("opacity", 1);
}//showColorLegend

pt.extraDetailTop2000.showBowie = function() {
    //In case you move backward
    pt.extraDetailTop2000.svg.selectAll("#beatles *, #annotation #beatlesText, #unique *, #annotation #uniqueText g, #topText g, #legendVinyl")
        .transition().duration(500)
        .style("opacity", 0);

    //Move the legends back
    pt.extraDetailTop2000.svg.select("#legendSize")
        .transition().duration(1000)
        .attr("transform","scale(1)translate(0,0)");
    pt.extraDetailTop2000.svg.select("#legendColor")
        .transition().duration(1000)
        .attr("transform","scale(1)translate(0,0)");

    //Show the songs of David Bowie
    pt.extraDetailTop2000.svg.selectAll("#bowie *")
        .transition().duration(500).delay(function(d,i) { return 1000 + i*100; })
        .style("opacity", 1);
    pt.extraDetailTop2000.svg.selectAll("#annotation #bowieText")
        .transition().duration(1000).delay(1500)
        .style("opacity", 1);

    //Show the songs of Prince
    pt.extraDetailTop2000.svg.selectAll("#prince *")
        .transition().duration(500).delay(function(d,i) { return 2500 + i*100; })
        .style("opacity", 1);
    pt.extraDetailTop2000.svg.selectAll("#annotation #princeText")
        .transition().duration(1000).delay(3000)
        .style("opacity", 1);
}//showBowie

pt.extraDetailTop2000.showRed = function() {
    //In case you move backwards
    pt.extraDetailTop2000.svg.selectAll("#bottom, #titleIntro")
        .transition("appear").duration(500)
        .style("opacity", 0);
    pt.extraDetailTop2000.svg
        .transition("move").duration(1500)
        .attr("transform","scale(1)translate(0,0)");

    //Show the songs of the Beatles
    pt.extraDetailTop2000.svg.selectAll("#beatles *")
        .transition("beatles").duration(500).delay(function(d,i) { return 500 + i*70; })
        .style("opacity", 1);
    pt.extraDetailTop2000.svg.selectAll("#annotation #beatlesText")
        .transition("beatles-text").duration(1000).delay(1000)
        .style("opacity", 1);

    //Show the songs with red
    pt.extraDetailTop2000.svg.selectAll("#unique *")
        .transition("unique").duration(700).delay(function(d,i) { return 3000 + i*600; })
        .style("opacity", 1);
    pt.extraDetailTop2000.svg.selectAll("#annotation #uniqueText g")
        .transition("unique-text").duration(700).delay(function(d,i) { return 3000 + i*600; })
        .style("opacity", 1);

    //Show the top 10
    pt.extraDetailTop2000.svg.selectAll("#topText g, #legendVinyl")
        .transition("vinyl").duration(500).delay(function(d,i) { return 8000 + i*100; })
        .style("opacity", 1);
}//showRed

pt.extraDetailTop2000.showAll = function() {
    //In case you come in from the next slide backwards
    //Hide all the parts that are "details"
    pt.extraDetailTop2000.svg.selectAll("#legendVinyl, #bowieText, #princeText, #beatlesText, #uniqueText g, #topText g, #unique *, #prince *, #bowie *, #beatles *")
        .style("opacity", 1);

    //Show everything else
    pt.extraDetailTop2000.svg.selectAll("#bottom, #titleIntro")
        .transition("appear").duration(1000)
        .style("opacity", 1);

    //Move the visual so the entire poster becomes visible
    pt.extraDetailTop2000.svg
        .transition("move").duration(1500)
        .attr("transform","translate(70,-160)scale(0.75)");
}//showAll