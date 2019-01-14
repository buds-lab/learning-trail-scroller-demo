// 14 January 2019
// Author: Prageeth Jayathissa
// p.jayathissa@gmail.com

var autoscroller = function(){

	console.log("Started autoscrolling")
	console.log(window.location.pathname)
	const pathnames = ["/index.html", "/water_trail.html", "/wellness_trail.html", "/tropical_architecture_trail.html", "/hybrid_cooling_trail.html", "/net_zero_energy.html", "/biophilic_trail.html"]
	
	var currentPathnameIndex = pathnames.indexOf(window.location.pathname)

	var autoscroll = setInterval(function(){ 
		window.scrollBy(0,2); 
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		console.log("At bottom of page");
		window.scrollTo(0,0);


		if (currentPathnameIndex === 6){
			document.location.href = pathnames[0]
		}
		else{
				document.location.href = pathnames[currentPathnameIndex+1]
		}
	}
		

			}, 10);
	console.log("Autoscroller run")


return autoscroller

}