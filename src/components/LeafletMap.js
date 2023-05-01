import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Rectangle, Map, ImageOverlay } from 'react-leaflet'


function LeafletMap ()
{
    const center = [51.505, -0.09]

    return(
        <div >
            <MapContainer  center={center} zoom={2} scrollWheelZoom={true} style={{height: 700, width : "100%"}}>
              <TileLayer
                noWrap={true}
                name="Test"
                url="https://raw.githubusercontent.com/csongorb/devolution7/master/src/components/CustomTiles/{z}/{x}/{y}.png"/>

              <Marker position={center}>
                <Popup>
                Link<br />
                <a target="_blank" href="https://devolution.online/">here</a>
                </Popup>
              </Marker>

              <ImageOverlay
              url="https://de.wikipedia.org/wiki/House#/media/Datei:Paradise_garage.jpg"
              bounds={[center, [-35.8650, 154.2094]]}
              />

              <Rectangle
                bounds={[center,[54, 6],]} pathOptions={{ color: 'cyan' }}>
                <Popup>
                <iframe width="300" height="169" src="https://www.youtube.com/embed/6O6V7L2IByg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Popup>
              </Rectangle>

            </MapContainer>
        </div>
    )
}

export default LeafletMap;
