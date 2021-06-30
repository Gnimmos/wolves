import React, { useState,useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import Wolf1 from './wolf1.js'
import Wolf2 from './wolf2.js'
import Wolf3 from './wolf3.js'
import Wolf4 from './wolf4.js'
import Wolf5 from './wolf5.js'
import Wolf6 from './wolf6.js'
import Wolf7 from './wolf7.js'
import Wolf8 from './wolf8.js'
import Wolf9 from './wolf9.js'
import Wolf10 from './wolf10.js'
import Wolf11 from './wolf11.js'
import Wolf12 from './wolf12.js'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = { lat: 50.081221546, lng: 	14.4222516135 };

function MapView() {
  const mapRef = useRef(null);

  const [selectedCenter, setSelectedCenter] = useState(null);

  const [selectedwolf2, setwolf2] = useState(null);

  const [selectedwolf3, setwolf3] = useState(null);

  const [selectedwolf4, setwolf4] = useState(null);

  const [selectedwolf5, setwolf5] = useState(null);
    
  const [selectedwolf6, setwolf6] = useState(null);
    
  const [selectedwolf7, setwolf7] = useState(null);
    
  const [selectedwolf8, setwolf8] = useState(null);
    
  const [selectedwolf9, setwolf9] = useState(null);
    
  const [selectedwolf10, setwolf10] = useState(null);
    
  const [selectedwolf11, setwolf11] = useState(null);
    
  const [selectedwolf12, setwolf12] = useState(null);


  const [position, setPosition] = useState({
    lat: 50.09731092200874,
    
    lng: 	14.42326788471357 
});

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCPvonqANcEExEJ9Kt3FuRPGePPZb1JqBo"
  })


  function handleLoad(map) {
    mapRef.current = map;
  }

  function handleCenter() {
    if (!mapRef.current) return;

    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
          initialCenter = {{     lat: 50.0970735409358,
            lng: 	 14.42344428670212}}
          zoom= {13}
        onLoad={handleLoad}
        onDragEnd={handleCenter}

      >
        {/* Wolf 1 marker and popup */}
          <Marker
           position={{     lat: 50.0970735409358,
            lng: 	 14.42344428670212
          }}
           onClick={() => {
            setSelectedCenter(center);
         }
       
         }>

          {selectedCenter && (         
           <InfoWindow class="scrollFix" maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setSelectedCenter(null);
         }}
         
           position={{ lat: 50.09731092200874,  lng: 	14.42326788471357 }}
           >
          <div className="importedpanel">
            <Wolf1/>
            </div>
          </InfoWindow>
        )}
        </Marker>

        {/* Wolf 2 marker and popup */}

          <Marker position={ { lat:50.07963516948142,   lng: 	14.422411559068218}}
           onClick={() => {
            setwolf2(center);
         }}>

        </Marker>
        {selectedwolf2 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf2(null);
         }}
           position={ {lat:50.07963516948142,   lng: 	14.422411559068218}}
           >
          <div className="importedpanel">
            <Wolf2/>
            </div>
          </InfoWindow>
        )}
           {/* Wolf 3 marker and popup */}

           <Marker position={ {     lat: 50.07994163214149,  lng:  14.422198819621565

}}
           onClick={() => {
            setwolf3(center);
         }}>

        </Marker>
        {selectedwolf3 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf3(null);
         }}
           position={ {     lat: 50.07994163214149,  lng:  14.422198819621565

           }}
           >
          <div className="importedpanel">
            <Wolf3/>
            </div>
          </InfoWindow>
        )}

                   {/* Wolf 4 marker and popup */}

                   <Marker position={{     lat: 50.08838681986969,   lng: 14.4287643540203
}}
           onClick={() => {
            setwolf4(center);
         }}>

        </Marker>
        {selectedwolf4 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf4(null);
         }}
           position={ {     lat: 50.08838681986969,   lng: 14.4287643540203
           }}
           >
          <div className="importedpanel">
            <Wolf4/>
            </div>
          </InfoWindow>
        )}
                           {/* Wolf 5 marker and popup */}

                           <Marker position={ { lat: 50.083018934140966,    lng: 	 14.42191639903326 }}
           onClick={() => {
            setwolf5(center);
         }}>

        </Marker>
        {selectedwolf5 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf5(null);
         }}
           position={{ lat: 50.083018934140966,    lng: 	 14.42191639903326 }}
           >
          <div className="importedpanel">
            <Wolf5/>
            </div>
          </InfoWindow>
        )}
                           {/* Wolf 6 marker and popup */}

                           <Marker position={  { lat: 50.07482399380203,     lng: 	 14.415650840534106}}
           onClick={() => {
            setwolf6(center);
         }}>

        </Marker>
        {selectedwolf6 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf6(null);
         }}
           position={  { lat: 50.07482399380203,     lng: 	 14.415650840534106}}
           >
          <div className="importedpanel">
            <Wolf6/>
            </div>
          </InfoWindow>
        )}
                           {/* Wolf 7 marker and popup */}

                           <Marker position={ { lat: 50.08866587942711,     lng: 	 14.41493155616264 }}
           onClick={() => {
            setwolf7(center);
         }}>

        </Marker>
        {selectedwolf7 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf7(null);
         }}
           position={ { lat: 50.08866587942711,     lng: 	 14.41493155616264 }}
           >
          <div className="importedpanel">
            <Wolf7/>
            </div>
          </InfoWindow>
        )}
                           {/* Wolf 8 marker and popup */}

                           <Marker position={ { lat: 50.06714961925144,     lng: 	 14.435579098490512 }}
           onClick={() => {
            setwolf8(center);
         }}>

        </Marker>
        {selectedwolf8 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf8(null);
         }}
           position={{ lat: 50.06714961925144,     lng: 	 14.435579098490512 }}
           >
          <div className="importedpanel">
            <Wolf8/>
            </div>
          </InfoWindow>
        )}
                           {/* Wolf 9 marker and popup */}

                           <Marker position={  { lat: 50.10542604617882,   lng: 14.472954291237905}}
           onClick={() => {
            setwolf9(center);
         }}>

        </Marker>
        {selectedwolf9 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf9(null);
         }}
           position={ { lat: 50.10542604617882,   lng: 14.472954291237905}}
           >
          <div className="importedpanel">
            <Wolf9/>
            </div>
          </InfoWindow>
        )}
                           {/* Wolf 10 marker and popup */}

                           <Marker position={{    lat: 50.10366602403943,   lng: 14.390367862718017
          }}
           onClick={() => {
            setwolf10(center);
         }}>

        </Marker>
        {selectedwolf10 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf10(null);
         }}
           position={ {     lat: 50.10366602403943,   lng: 14.390367862718017
           }}
           >
          <div className="importedpanel">
            <Wolf10/>
            </div>
          </InfoWindow>
        )}
                           {/* Wolf 11 marker and popup */}

                           <Marker position={ {lat: 50.0800218898805,        lng: 	14.42218269830287}}
           onClick={() => {
            setwolf11(center);
         }}>

        </Marker>
        {selectedwolf11 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf11(null);
         }}
           position={ { lat: 50.0800218898805,        lng: 	14.42218269830287}}
           >
          <div className="importedpanel">
            <Wolf11/>
            </div>
          </InfoWindow>
        )}
                           {/* Wolf 12 marker and popup */}

                   <Marker  position={{ lat: 50.083320188218316,     lng: 		14.417951201134887}}
           onClick={() => {
            setwolf12(center);
         }}>

        </Marker>
        {selectedwolf12 && (         
           <InfoWindow class="scrollFix"maxWidth="100%" maxHeight="100%"className="Popup"
           onCloseClick={() => {
            setwolf12(null);
         }}
         position={{ lat: 50.083320188218316,     lng: 		14.417951201134887}}
                    >
          <div className="importedpanel">
            <Wolf12/>
            </div>
          </InfoWindow>
        )}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
export default MapView;
