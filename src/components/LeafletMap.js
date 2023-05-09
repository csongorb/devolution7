import { MapContainer, useMapEvents, Rectangle, Circle, Popup, TileLayer, ImageOverlay  } from 'react-leaflet';
import L, { LatLngBounds } from 'leaflet';
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

  const bounds = new LatLngBounds(
    [crs.unproject(L.point(mapExtent[2], mapExtent[3]))],
    [crs.unproject(L.point(mapExtent[0], mapExtent[1]))]
  )


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
      center={[72.59334083012024, -90.52734375]} //hardcoded here, but bounds.GetCenter() results in empty viewport
      zoom={0}
      minZoom={mapMinZoom}
      maxZoom={mapMaxZoom}
      scrollWheelZoom={false}
      bounds={bounds}
      maxBounds={constants.MAP_BOUNDS}
      maxBoundsViscosity={0.8}
      style={{height: 400, width : "100%"}}
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
          <a href={constants.megagon_industries_URL } target="_blank" rel="noreferrer">Megagon Industries Website</a>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.greenlight_trailer_sw, constants.greenlight_trailer_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.greenlight_trailer_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lara_croft_sw, constants.lara_croft_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lara_croft_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.yeti_mountain_sw, constants.yeti_mountain_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.yeti_mountain_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.and_then_it_rained_sw, constants.and_then_it_rained_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.and_then_it_rained_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.twisted_lines_trailer_sw, constants.twisted_lines_trailer_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.twisted_lines_trailer_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lmd_climate_change_edition_sw, constants.lmd_climate_change_edition_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lmd_climate_change_edition_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lmd_kickstarter_trailer_sw, constants.lmd_kickstarter_trailer_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lmd_kickstarter_trailer_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lmd_demo_gameplay_sw, constants.lmd_demo_gameplay_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lmd_demo_gameplay_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lmd_launch_trailer_sw, constants.lmd_launch_trailer_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lmd_launch_trailer_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lmd_dev_speedrun_sw, constants.lmd_dev_speedrun_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lmd_dev_speedrun_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lmd_eldfjall_island_sw, constants.lmd_eldfjall_island_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lmd_eldfjall_island_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lmd_rileys_return_sw, constants.lmd_rileys_return_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lmd_rileys_return_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Rectangle
        bounds={[constants.lmd_misty_peak_sw, constants.lmd_misty_peak_ne]}
        color="#66000000"
        fillOpacity={0}
      >
        <Popup>
        <iframe width="300" height="169" src={constants.lmd_misty_peak_URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Popup>
      </Rectangle>

      <Circle
      center={constants.kickstarter_interview_bubenik_center}
      radius={constants.circular_area_radius}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.kickstarter_interview_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>

      <Circle
      center={constants.kickstarter_interview_helbig_center}
      radius={constants.circular_area_radius}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.kickstarter_interview_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>


      <Circle
      center={constants.igf_interview_center}
      radius={constants.circular_area_radius}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.igf_interview_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>

      <Circle
      center={constants.making_games_helbig1_center}
      radius={90000}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.making_games_pdf_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>

      <Circle
      center={constants.making_games_bubenik1_center}
      radius={90000}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.making_games_pdf_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>

      <Circle
      center={constants.kickstarter_interview_bubenik2_center}
      radius={100000}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.kickstarter_interview_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>

      <Circle
      center={constants.eggplant_interview_helbig1_center}
      radius={130000}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.eggplant_interview_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>

      <Circle
      center={constants.making_games_helbig2_center}
      radius={165000}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.making_games_pdf_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>

      <Circle
      center={constants.eighty_lv_helbigandbubenik1_center}
      radius={280000}
      stroke={false}
      fillOpacity={0.5}
      >
        <Popup><a href={constants.eighty_lv_interview_URL} target="_blank" rel="noreferrer">interview link</a></Popup>
      </Circle>


      <ImageOverlay url={constants.image_7_URL} bounds={L.latLngBounds(constants.image_7_sw, constants.image_7_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_8_URL} bounds={L.latLngBounds(constants.image_8_sw, constants.image_8_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_9_URL} bounds={L.latLngBounds(constants.image_9_sw, constants.image_9_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_10_URL} bounds={L.latLngBounds(constants.image_10_sw, constants.image_10_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_11_URL} bounds={L.latLngBounds(constants.image_11_sw, constants.image_11_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_12_URL} bounds={L.latLngBounds(constants.image_12_sw, constants.image_12_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_13_URL} bounds={L.latLngBounds(constants.image_13_sw, constants.image_13_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_14_URL} bounds={L.latLngBounds(constants.image_14_sw, constants.image_14_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_15_URL} bounds={L.latLngBounds(constants.image_15_sw, constants.image_15_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_16_URL} bounds={L.latLngBounds(constants.image_16_sw, constants.image_16_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_17_URL} bounds={L.latLngBounds(constants.image_17_sw, constants.image_17_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_35_URL} bounds={L.latLngBounds(constants.image_35_sw, constants.image_35_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_36_URL} bounds={L.latLngBounds(constants.image_36_sw, constants.image_36_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_60_URL} bounds={L.latLngBounds(constants.image_60_sw, constants.image_60_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_76_URL} bounds={L.latLngBounds(constants.image_76_sw, constants.image_76_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_77_URL} bounds={L.latLngBounds(constants.image_77_sw, constants.image_77_ne)} opacity={1}/>
      <ImageOverlay url={constants.image_78_URL} bounds={L.latLngBounds(constants.image_78_sw, constants.image_78_ne)} opacity={1}/>
      
      
     
  
  
  

      <Circle
      center={bounds.getCenter()}
      radius={9999999}
      color="#FF0000"
      stroke={true}
      fillOpacity={0.5}
      >
      </Circle>

      <MapEvents />
    </MapContainer>
    </div>
  );
}

export default LeafletMap;
