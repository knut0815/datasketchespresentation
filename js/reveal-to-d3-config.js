/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'datasketches-title': {
    'init': function() {
      pt.datasketchesTitle.init();
    }
  },
  'olympic-intro': {
    'init': function() {
      pt.olympicIntro.init(olympicData);
    },
    '-1': function() {
      pt.olympicIntro.smallStart();
    },
    0: function() {
      pt.olympicIntro.bigEnd();
    },
  },
  'royal-network': {
    'init': function() {
      pt.royalNetwork.init(royalNetworkNodes, royalNetworkLinks);
    },
    '-1': function() {
      pt.royalNetwork.chaos(royalNetworkNodes, royalNetworkLinks);
    },
    0: function() {
      pt.royalNetwork.hairball(royalNetworkNodes, royalNetworkLinks);
    },
    1: function() {
      pt.royalNetwork.colorBirthYear();
    },
    2: function() {
      pt.royalNetwork.stretchX(royalNetworkNodes, royalNetworkLinks);
    },
    3: function() {
      pt.royalNetwork.stretchY(royalNetworkNodes, royalNetworkLinks);
    },
    4: function() {
      pt.royalNetwork.updateDesign(royalNetworkNodes, royalNetworkLinks);
    },
  },
  'extra-detail-top-2000': {
    'init': function() {
      pt.extraDetailTop2000.init();
    },
    '-1': function() {
      pt.extraDetailTop2000.resetSVG();
    },
    0: function() {
      pt.extraDetailTop2000.showColorLegend();
    },
    1: function() {
      pt.extraDetailTop2000.showSketch();
    },
    2: function() {
      pt.extraDetailTop2000.showBowie();
    },
    3: function() {
      pt.extraDetailTop2000.showRed();
    },
    4: function() {
      pt.extraDetailTop2000.showAll();
    },
  },
  'magic-name-arcs': {
    'init': function() {
      pt.magicNameArcs.init();
    }
  },
  'lotr-intro': {
    'init': function() {
      pt.lotrIntro.init(lotrWords);
    }
  },
  'chord-to-loom-1': {
    'init': function() {
      pt.chordToLoom.init();
    },
    '-1': function() {
      pt.chordToLoom.normalChord();
    },
    0: function() {
      pt.chordToLoom.adjustedChord();
    },
    1: function() {
      pt.chordToLoom.adjustedArc();
    }
  },
  'chord-to-loom-2': {
    'init': function() {
      pt.chordToLoom2.init(lotrWords);
    },
    '-1': function() {
      pt.chordToLoom2.adjustedData();
    },
    0: function() {
      pt.chordToLoom2.adjustedColors(lotrWords);
    },
    1: function() {
      pt.chordToLoom2.innerLocation(lotrWords);
    },
    3: function() {
      pt.chordToLoom2.stringShape(lotrWords);
    },
    2: function() {
      pt.chordToLoom2.moveApart(lotrWords);
    },
  },
  'dbz-path-simple': {
    'init': function() {
      pt.dbzPathSimple.init(dbzFights);
    },
    '-1': function() {
      pt.dbzPathSimple.showCirclesOnly();
    },
    0: function() {
      pt.dbzPathSimple.showSimplePaths();
    },
    1: function() {
      pt.dbzPathSimple.showAnchorPoints();
    },
    2: function() {
      pt.dbzPathSimple.addSwoop();
    },
    3: function() {
      pt.dbzPathSimple.addChangeSide();
    },
    4: function() {
      pt.dbzPathSimple.hideAnchors();
    },
  },
  'dbz-svg-path-sketch': {
    'init': function() {
      setTimeout(function() {
      	pt.dbzPathFinal.init(dbzFights)
      }, 500);
    }
  },
  'dbz-path-final': {
    'init': function() {
      pt.dbzPathFinal.init(dbzFights);
    }
  },
  'in-english-network-bad': {
    'init': function() {
      pt.inEnglishNetwork.init(networkLinks, false, "in-english-network-bad", "inEnglishNetworkBad");
    }
  },
  'in-english-network-good': {
    'init': function() {
      pt.inEnglishNetwork.init(networkLinks, true, "in-english-network-good", "inEnglishNetworkGood");
    }
  },
  'olympic-buildup': {
    'init': function() {
      pt.olympicBuildUp.init(olympicData);
    },
    '-1': function() {
      pt.olympicBuildUp.initializeCircles();
    },
    0: function() {
      pt.olympicBuildUp.rotateCircles();
    },
    1: function() {
      pt.olympicBuildUp.rotateFeathers();
    },
    2: function() {
      pt.olympicBuildUp.outwardEditions();
    },
    3: function() {
      pt.olympicBuildUp.outwardMedals();
    },
  },
  'magic-legend': {
    'init': function() {
      pt.magicLegend.init();
    }
  },
  'end-slide': {
    'init': function() {
      pt.endSlide.init();
    }
  },
};

function removeSVGs() {

  //Remove (heavy) all existing svg currently running

  //Intro
  clearInterval(pt.datasketchesTitle.loop);

  //data - nadieh
  d3.select('#olympic-intro #olympicIntro svg').remove();
  d3.select('#olympic-buildup #olympicBuildUp svg').remove();

  //sketch - nadieh
  d3.select('#royal-network #royalNetwork svg').remove();

  //code - nadieh
  d3.select('#lotr-intro #lotrIntro svg').remove();
  //d3.select('#chord-to-loom-1 #chordToLoom svg').remove();
  //d3.select('#chord-to-loom-2 #chordToLoom2 svg').remove();

  //End
  clearInterval(pt.endSlide.loop);

}//removeSVGs
