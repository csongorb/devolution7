import { MapContainer, useMapEvents, Marker, Popup, TileLayer, ImageOverlay  } from 'react-leaflet';
import L from 'leaflet';


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
//test bounds for imageOverlay
  var southwest = L.latLng(80.36986904043088, -104.84527587890626); // example southwest coordinate
  var northeast = L.latLng(80.90761572909896, -101.51092529296876); // example northeast coordinate
  var overlayBounds = L.latLngBounds(southwest, northeast);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
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
            
      <Marker position={[85.04686205001023, -179.94781494140628]}>
        <Popup position={[85.04686205001023, -179.94781494140628]}>
          Poput at [85.04686205001023, -179.94781494140628] !
        </Popup>
      </Marker>

      <Marker position={[76.25564951145621, -76.1517333984375]}>
        <Popup position={[76.25564951145621, -76.1517333984375]}>
        <iframe width="300" height="169" src="https://www.youtube.com/embed/6O6V7L2IByg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Marker>

      <ImageOverlay url={"https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image7.gif"} bounds={overlayBounds} opacity={1} zIndex={10000}/>

      <MapEvents />
    </MapContainer>
    </div>
  );
}

export default LeafletMap;

//test video link tag  <iframe width="300" height="169" src="https://www.youtube.com/embed/6O6V7L2IByg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

