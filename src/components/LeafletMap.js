import { MapContainer, TileLayer } from 'react-leaflet';
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


  return (
    <div>
      <MapContainer
      center={[0, 0]} 
      zoom={2}  
      minZoom={mapMinZoom}
      maxZoom={mapMaxZoom}
      bounds={[
        crs.unproject(L.point(mapExtent[2], mapExtent[3])),
        crs.unproject(L.point(mapExtent[0], mapExtent[1]))
      ]}
      style={{height: 700, width : "100%"}}>

      <TileLayer
      minZoom={mapMinZoom}
      maxZoom={mapMaxZoom}
      tileSize={L.point(512, 512)}
      noWrap={true}
      tms={false}
      url="https://raw.githubusercontent.com/csongorb/devolution7/master/src/components/CustomTiles/{z}/{x}/{y}.png"/>

    </MapContainer>
    </div>
  );
}

export default LeafletMap;
