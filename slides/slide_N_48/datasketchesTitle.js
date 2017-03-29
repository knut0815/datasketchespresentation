pt.datasketchesTitle = pt.datasketchesTitle || {};

pt.datasketchesTitle.init = function() {

	var ids = ["july","august","september","october","november","december","january"]; //"febraury","march"
	var counter = 0;
	var dur = 1000;

	pt.datasketchesTitle.loop = setInterval(loopMonths,dur*1.5);
	loopMonths();

	function loopMonths() {
		d3.select("#datasketches-title #ds-" + ids[(counter-1)%ids.length])
			.transition().duration(dur)
			.ease(d3.easeLinear)
			.style("opacity", 0);

		d3.select("#datasketches-title #ds-" + ids[counter%ids.length])
			.transition().duration(dur)
			.ease(d3.easeLinear)
			.style("opacity", 1);

		counter += 1;
	}//loopMonths

}//init
