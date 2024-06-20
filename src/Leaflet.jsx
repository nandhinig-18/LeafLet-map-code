import React from "react";
import { Map, TileLayer ,CircleMarker,Tooltip,Circle,MapContainer} from "react-leaflet";
import MarkerCluster from "./Clusters";


const position = [51.505, -0.09];
const bubbleStyle = {
  fill: {
    color: "orange",
    opacity: 0.5,
  },
  stroke: {
    width: 1,
    color: "black",
  },
};
const mapStyle = { height: "90vh"};

const Leaflet = () => {
  let markers;

  const addMarkers = () => {
    markers = [];
    for (let i = 0; i < 100; i++) {
      markers.push({
        position: {
          lng: -122.673447 + Math.random() * 200.0,
          lat: 45.5225581 - 60 + Math.random() * 80,
          city:"test"+i+1,
          pop:2003000+i+1
        }
      });
    }
  };

  addMarkers();

  return (
    <>
      <Map center={position} zoom={2} style={mapStyle} maxZoom={20} >
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* <MarkerCluster markers={markers} addMarkers={addMarkers} /> */}

        {markers.map((city, k) => {
            return (
              
              <CircleMarker
                key={k}
                center={[city?.position["lng"], city?.position["lat"]]}
                fillOpacity={0.2}
                radius={10}
               
                color="#7421f0" 
                stroke={false}
              >
<Circle                 center={[51.51, -0.12]}
 fillColor="blue" radius={5} />

              <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{city?.position["city"] + ": " + "Population" + " " +city?.position["pop"] }</span>
                </Tooltip>
              </CircleMarker>
              
            );
          })}
      </Map>
      <div>
      </div>
    </>
  );
};

export default Leaflet;
