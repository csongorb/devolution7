import { MapContainer, useMapEvents, Rectangle, Circle, Popup, TileLayer, ImageOverlay  } from 'react-leaflet';
import L from 'leaflet';
import * as constants from './Constants';

function LeafletMap() {
  const mapExtent = [0.00000000, -39288.00000000, 33000.00000000, 0.00000000];
  const mapMinZoom = 2;
  const mapMaxZoom = 8;
  const mapMaxResolution = 0.50000000;
  const mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
  const tileExtent = [0.00000000, -39288.00000000, 33000.00000000, 0.00000000];

  const crs = L.CRS.Simple;
  crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);
  crs.scale = function (zoom) {
    return Math.pow(2, zoom) / mapMinResolution;
  };
  crs.zoom = function (scale) {
    return Math.log(scale * mapMinResolution) / Math.LN2;
  };

  const bounds = [
    crs.unproject(L.point(mapExtent[2], mapExtent[3])),
    crs.unproject(L.point(mapExtent[0], mapExtent[1]))
  ]

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
      },
    });
    return false;
}

  return (
    <div>
      <MapContainer
      center={[62.59334083012024, -90.52734375]} //hardcoded here, but bounds.GetCenter() results in empty viewport
      zoom={2}  
      minZoom={mapMinZoom}
      maxZoom={mapMaxZoom}
      bounds={bounds}
      style={{height: 700, width : "100%"}} 
      >

      <TileLayer
      minZoom={mapMinZoom}
      maxZoom={mapMaxZoom}      
      noWrap={true}
      tms={false}
      url="https://raw.githubusercontent.com/csongorb/devolution7/master/src/components/CustomTiles/{z}/{x}/{y}.png"/>            

      <Rectangle
        bounds={[constants.megagon_industries_sw, constants.megagon_industries_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
          <a href={constants.megagon_industries_URL}>Megagon Industries Website</a>
        </Popup>
      </Rectangle>

      <Circle
      center={constants.kickstarter_interview_bubenik_center}
      radius={constants.circular_area_radius}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.kickstarter_interview_URL}>interview link</a></Popup>
      </Circle>
      
      <ImageOverlay url={constants.image_7_URL} bounds={L.latLngBounds(constants.image_7_sw, constants.image_7_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_8_URL} bounds={L.latLngBounds(constants.image_8_sw, constants.image_8_ne)} opacity={1}/>
      
      <MapEvents />
    </MapContainer>
    </div>
  );
}

export default LeafletMap;

//video popup         <iframe width="300" height="169" src={constants.link_greenlight_trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



