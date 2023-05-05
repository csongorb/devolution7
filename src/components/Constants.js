import L from 'leaflet';
//icons for markers
const linkIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/link_icon.svg', // URL of the SVG icon
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -35], // point from which the popup should open relative to the iconAnchor
  });

  const videoIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/video_icon.svg', 
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [0, -35], 
  });

//link to the git file and bounds on the map for the respective gif
//please follow the format and naming style
const image_7_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image7.gif'; //path to raw file stored on github 
const image_7_sw = L.latLng(80.36986904043088, -104.84527587890626); //  southwest coordinate
const image_7_ne = L.latLng(80.90761572909896, -101.51092529296876); //  northeast coordinate

const image_8_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image8.gif'; //path to raw file stored on github 
const image_8_sw = L.latLng(80.37078793327677, -101.29119873046876); //  southwest coordinate
const image_8_ne = L.latLng(81.34146214129296, -97.8689581853035); //  northeast coordinate

//links for Marker Popups
const link_megagon_industries = "https://megagonindustries.com/";
const link_megagon_industries_position =  L.latLng(82.66647506333487, -43.15979003906251); 

const link_greenlight_trailer = "https://www.youtube.com/embed/_-KESI3qIBg";
const link_greenlight_trailer_position =  L.latLng(69.23084132902646, -84.67437744140625); 

export {
    linkIcon,
    videoIcon,

    image_7_URL,
    image_7_sw,
    image_7_ne,

    image_8_URL,
    image_8_sw,
    image_8_ne,

    link_megagon_industries,
    link_megagon_industries_position,

    link_greenlight_trailer,
    link_greenlight_trailer_position
    };