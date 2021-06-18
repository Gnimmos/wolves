import React, { useState, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
const containerStyle = {
  width: '100%',
  height: '100%'
};

function MapView() {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCPvonqANcEExEJ9Kt3FuRPGePPZb1JqBo"
  })
  const [position, setPosition] = useState({
    lat: 50.07997683989879,       lng: 	14.422042869370111});
const [map, setMap] = React.useState(null)

function handleLoad(map) {
  mapRef.current = map;
}

function handleCenter() {
  if (!mapRef.current) return;

  const newPos = mapRef.current.getCenter().toJSON();
  setPosition(newPos);
}
const onUnmount = React.useCallback(function callback(map) {
  setMap(null)
}, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
        initialCenter = {{lat: 50.07997683989879,       lng: 	14.422042869370111}}
        zoom= {12}
      onLoad={handleLoad}
      onDragEnd={handleCenter}

      onUnmount={onUnmount}
    >
 <Marker
           position={{lat: 50.07997683989879,       lng: 	14.422042869370111}}></Marker>
<></>
      </GoogleMap>
  ) : <></>
}

function Maps() {
    return (
      <div className="Maplink">
        <MapView  >
        </MapView>
    </div>
    );
  }
  
  export default Maps;