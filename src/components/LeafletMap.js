import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Rectangle, ImageOverlay, SVGOverlay } from 'react-leaflet'
//import {ReactComponent as SvgElement1} from './tree.svg';
import L from 'leaflet';

function LeafletMap ()
{
  const tileSize = 126;  // size of your custom tiles
  const minCoord = L.point(0, 0);  // minimum coordinate of your tile grid
  const maxCoord = L.point(129, 154);  // maximum coordinate of your tile grid
  const minLatLng = L.latLng(
    maxCoord.y * tileSize,  // convert y coordinate to latitude
    minCoord.x * tileSize   // convert x coordinate to longitude
  );
  const maxLatLng = L.latLng(
    minCoord.y * tileSize + tileSize,  // convert y coordinate to latitude
    maxCoord.x * tileSize + tileSize   // convert x coordinate to longitude
  );
  //const bounds = L.latLngBounds(minLatLng, maxLatLng);
  const bounds = [
    [51.49, -0.08], //sw
    [19404, 16380], //ne
  ]

    function handleClick(e) {
      if (e.pointerType === 'touch') {
        console.log(`Clicked with touch at coordinates: ${e.latlng}`);
        console.log(`Pressure applied: ${e.pressure}`);
      } else {
        console.log(`Clicked with mouse at coordinates: ${e.latlng}`);
      }
    }

    
    return(
        <div >
            <MapContainer  center={[0, 0]} zoom={0} minZoom={0} maxZoom={8}  onClick={handleClick} style={{height: 700, width : "100%"}}>
              <TileLayer
                url="https://raw.githubusercontent.com/csongorb/devolution7/master/src/components/CustomTiles/{z}/{x}/{y}.png"
                noWrap={true}
                name="Test"
                bounds={bounds}
                maxZoom={8}
                />

{ /*         <Marker position={center}>
                <Popup>
                Link<br />
                <a target="_blank" rel="noreferrer" href="https://devolution.online/">here</a>
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
              <SVGOverlay  bounds={bounds} zIndex={1000}>
                <SvgElement1 />
            </SVGOverlay>
*/}
            </MapContainer>
        </div>
    )
}

export default LeafletMap;
