      mapboxgl.accessToken = '';
      var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOiJiYXNlOnI7bnVzX3N0YXRpYzpyO251c19keW5hbWljOnIiLCJtZXRhQWNjZXNzIjoieSIsImp0aSI6IjkzYzM1Yjk5LTU4NWItNDE4NC1hZGZkLWVjYmE1OGMwNjc2ZSIsInN1YiI6Im51cyIsImVkaXRSaWdodHMiOiIiLCJlaWRBY2Nlc3MiOiJ5In0.EjYm2hieaJaEjr6Bsq9cHBIoModZyfTAB6ojJyWTXD8";
      var styleUrl = "https://mapdata.eu.steerpath.com/style/web.json?access_token="+token

      var mapboxMap = new mapboxgl.Map({
          container: 'mapboxMap',
          style: styleUrl,
          center: [103.770322, 1.296876],
          zoom: 18.6,
          bearing: 20,
          pitch: 30
      });

      //options for SteerpathMap class
      var options = {
        inspectionZoomLevel: 15,
        inspectionBoundaries: 0.5,
        queryOnceMapLoad: true
      };

      //create instance of SteerpathMap
      var steerpathMap = new steerpath.SteerpathMap(mapboxMap, options);
      //create floor switcher control and add it to the map
      var floorSwitcher = new steerpath.FloorSwitcherControl(steerpathMap);
      mapboxMap.addControl(floorSwitcher, 'bottom-right');