// 14 January 2019
// Author: Prageeth Jayathissa
// p.jayathissa@gmail.com


var delayedAutoscroller = function(delay=1000) {
	setTimeout(autoscroller, delay)
}

var autoscroller = function(){


	const pathnames = ["/index.html", "/sde_learning_trail.html","/water_trail.html", "/wellness_trail.html", "/tropical_architecture_trail.html", "/hybrid_cooling_trail.html", "/net_zero_energy_trail.html", "/biophilic_trail.html"]
	
	var currentPathnameIndex = pathnames.indexOf(window.location.pathname)
	console.log("body offset height " + document.body.offsetHeight)
	console.log("window inner height " + window.innerHeight)

	var autoscroll = setInterval(function(){ 
		window.scrollBy(0,1); 

		if ((window.innerHeight + window.scrollY +10) >= document.body.offsetHeight) {
		console.log("At bottom of page");
		window.scrollTo(0,0);


		if (currentPathnameIndex === pathnames.length-1){
			document.location.href = pathnames[0]
		}
		else{
				document.location.href = pathnames[currentPathnameIndex+1]
		}
	}
		

			}, 50);
	console.log("Autoscroller run")


return autoscroller

}

var scrollMobile = function(value){
	let windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let offset = (windowWidth <700) ? value : 0;

    //window.scrollTo(0,offset)

    scrollInterval = setInterval(function(){
        if ( window.scrollY < offset ) {
            window.scrollBy( 0, 10 );
        }
        else clearInterval(scrollInterval); 
    },5);

}