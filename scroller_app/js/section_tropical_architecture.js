/**
HOW TO ADD NEW IMAGES

1. Add imnage file to images folder
2. Create d3 pbject in setupVis() function


**/



/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function () {
  // constants to define the size
  // and margins of the vis area.
  let windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  let windowHeight = screen.height;

  var width = windowWidth/2.0;
  var height =windowHeight/2.0;
  var margin = { top: 0, left: 0, bottom: 30, right: 0 };

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // Sizing for the grid visualization
  var squareSize = 6;
  var squarePad = 2;
  var numPerRow = width / (squareSize + squarePad);

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // We will set the domain when the
  // data is processed.
  // @v4 using new scale names
  var xBarScale = d3.scaleLinear()
    .range([0, width]);

  // The bar chart display is horizontal
  // so we can use an ordinal scale
  // to get width and y locations.
  // @v4 using new scale type
  var yBarScale = d3.scaleBand()
    .paddingInner(0.08)
    .domain([0, 1, 2])
    .range([0, height - 50], 0.1, 0.1);

  // Color is determined just by the index of the bars
  var barColors = { 0: '#008080', 1: '#399785', 2: '#5AAF8C' };

  // The histogram display shows the
  // first 30 minutes of data
  // so the range goes from 0 to 30
  // @v4 using new scale name
  var xHistScale = d3.scaleLinear()
    .domain([0, 30])
    .range([0, width - 20]);

  // @v4 using new scale name
  var yHistScale = d3.scaleLinear()
    .range([height, 0]);

  // The color translation uses this
  // scale to convert the progress
  // through the section into a
  // color value.
  // @v4 using new scale name
  var coughColorScale = d3.scaleLinear()
    .domain([0, 1.0])
    .range(['#008080', 'red']);

  // You could probably get fancy and
  // use just one axis, modifying the
  // scale, but I will use two separate
  // ones to keep things easy.
  // @v4 using new axis name
  var xAxisBar = d3.axisBottom()
    .scale(xBarScale);

  // @v4 using new axis name
  var xAxisHist = d3.axisBottom()
    .scale(xHistScale)
    .tickFormat(function (d) { return d + ' min'; });

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];

  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function (selection) {
    selection.each(function () {
      // create svg and give it a width and height
      svg = d3.select(this).selectAll('svg').data([0]);
      var svgE = svg.enter().append('svg');
      // @v4 use merge to combine enter and existing selection
      svg = svg.merge(svgE);

      svg.attr('width', width + margin.left + margin.right);
      svg.attr('height', height + margin.top + margin.bottom);

      svg.append('g');

      // this group element will be used to contain all
      // other elements.
      g = svg.select('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



      setupVis();

      setupSections();
    });
  };



  var setupVis = function () {
    

    g.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxisBar);
    g.select('.x.axis').style('opacity', 0);


    //Wellness_trail 
    g.append('svg:image')
      .attr('class', 'title image1 ')
      .attr('x', 0)
      .attr('y', 0)
      .attr("width", width/1.3)
      .attr("height", height/1.3)
      .attr("xlink:href", "images/TROPICAL_ARCHITECTURE_TRAIL/TROPICAL_ARCHITECTURE_1.jpg");

    g.selectAll('.image1')
      .attr('opacity', 0);

    //Lighting
    g.append('svg:image')
      .attr('class', 'title image2')
      .attr('x', 0)
      .attr('y', 0)
      .attr("width", width/1.3)
      .attr("height", height/1.3)
      .attr("xlink:href", "images/TROPICAL_ARCHITECTURE_TRAIL/TROPICAL_ARCHITECTURE_2.gif");

    g.selectAll('.image2')
      .attr('opacity', 0);


    //Air
    g.append('svg:image')
      .attr('class', 'title image3')
      .attr('x', 0)
      .attr('y', 0)
      .attr("width", width/1.3)
      .attr("height", height/1.3)
      .attr("xlink:href", "images/TROPICAL_ARCHITECTURE_TRAIL/TROPICAL_ARCHITECTURE_3.gif");

    g.selectAll('.image3')
      .attr('opacity', 0);


    //Movement
    g.append('svg:image')
      .attr('class', 'title image4')
      .attr('x', 0)
      .attr('y', 0)
      .attr("width", width/1.3)
      .attr("height", height/1.3)
      .attr("xlink:href", "images/TROPICAL_ARCHITECTURE_TRAIL/TROPICAL_ARCHITECTURE_4.gif");

    g.selectAll('.image4')
      .attr('opacity', 0);


    //Sustainable NUS
    g.append('svg:image')
      .attr('class', 'title image5')
      .attr('x', 0)
      .attr('y', 0)
      .attr("width", width/1.3)
      .attr("height", height/1.3)
      .attr("xlink:href", "images/TROPICAL_ARCHITECTURE_TRAIL/TROPICAL_ARCHITECTURE_5.jpg");

    g.selectAll('.image5')
      .attr('opacity', 0);

  //IFC2CITYGML
    g.append('svg:image')
      .attr('class', 'title image6')
      .attr('x', 0)
      .attr('y', 0)
      .attr("width", width/1.3)
      .attr("height", height/1.3)
      .attr("xlink:href", "images/TROPICAL_ARCHITECTURE_TRAIL/TROPICAL_ARCHITECTURE_6.jpg");

    g.selectAll('.image6')
      .attr('opacity', 0);


//BIM-STP
    g.append('svg:image')
      .attr('class', 'title image7')
      .attr('x', 0)
      .attr('y', 0)
      .attr("width", width/1.3)
      .attr("height", height/1.3)
      .attr("xlink:href", "images/TROPICAL_ARCHITECTURE_TRAIL/TROPICAL_ARCHITECTURE_7.jpg");

    g.selectAll('.image7')
      .attr('opacity', 0);




   
  };

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  var setupSections = function () {
    // activateFunctions are called each
    // time the active section changes
       // activateFunctions[0] = showTitle;
       activateFunctions[-1] = doNothing;
       activateFunctions[0] = showFirst;
       activateFunctions[1] = showSecond;
       activateFunctions[2] = showThird;
       activateFunctions[3] = showFourth;
       activateFunctions[4] = showFifth;
       activateFunctions[5] = showSixth;
       activateFunctions[6] = showSeventh;
       activateFunctions[7] = showEighth;
       activateFunctions[8] = doNothing;
    // activateFunctions[3] = highlightGrid;
    // activateFunctions[4] = showBar;
    // activateFunctions[5] = showHistPart;
    // activateFunctions[6] = showHistAll;
    // activateFunctions[7] = showCough;
    // activateFunctions[8] = showHistAll;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = -1; i < 9; i++) {
      updateFunctions[i] = function () {};
    }

  };

    //A little hack around to get the graphics to disapear over menu bar
    function doNothing(){
          g.selectAll('.image1')
      .transition()
      .duration(600)
      .attr('opacity', 0.0);

    }


    function showFirst() {
    // g.selectAll('.WEL')
    //   .transition()
    //   .duration(0)
    //   .attr('opacity', 0);

    g.selectAll('.image1')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);

    g.selectAll('.image2')
      .transition()
      .duration(600)
      .attr('opacity', 0.0);
      

  }



  // /**
  // Funcitons need to be added here to show and hide images
  //  */
  function showSecond() {
    // Remove opacity of previous object (scrolling down)
    g.selectAll('.image1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Remove opacity of previous object (scrolling up)
    g.selectAll('.image3')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Show Image we want to show
    g.selectAll('.image2')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }

  function showThird() {
    // Remove opacity of previous object (scrolling down)
    g.selectAll('.image2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Remove opacity of previous object (scrolling up)
    g.selectAll('.image4')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Show Image that we want to show
    g.selectAll('.image3')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }


  function showFourth() {
    // Remove opacity of previous object (scrolling down)
    g.selectAll('.image3')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Remove opacity of previous object (scrolling up)
    g.selectAll('.image5')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Show Image that we want to show
    g.selectAll('.image4')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }



  function showFifth() {
    // Remove opacity of previous object (scrolling down)
    g.selectAll('.image4')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Remove opacity of previous object (scrolling up)
    g.selectAll('.image6')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Show Image that we want to show
    g.selectAll('.image5')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }


  function showSixth() {
    // Remove opacity of previous object (scrolling down)
    g.selectAll('.image5')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Remove opacity of previous object (scrolling up)
    g.selectAll('.image7')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Show Image that we want to show
    g.selectAll('.image6')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }


    function showSeventh() {
    // Remove opacity of previous object (scrolling down)
    g.selectAll('.image6')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Remove opacity of previous object (scrolling up)
    g.selectAll('.image8')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // Show Image that we want to show
    g.selectAll('.image7')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }

      function showEighth() {
    // Remove opacity of previous object (scrolling down)
    g.selectAll('.image7')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    // // Remove opacity of previous object (scrolling up)
    // g.selectAll('.image7')
    //   .transition()
    //   .duration(0)
    //   .attr('opacity', 0);

    // Show Image that we want to show
    g.selectAll('.image8')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }


  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function (index) {
    activeIndex = index;
    var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function (i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function (index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};


/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display(data) {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select('#vis')
    .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller()
    .container(d3.select('#graphic'));

  // pass in .step selection as the steps
  scroll(d3.selectAll('.step'));

  // setup event handling
  scroll.on('active', function (index) {
    // highlight current step text
    d3.selectAll('.step')
      .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    // activate current section
    plot.activate(index);
  });

  scroll.on('progress', function (index, progress) {
    plot.update(index, progress);
  });
}

// load data and display
d3.tsv('data/words.tsv', display);
