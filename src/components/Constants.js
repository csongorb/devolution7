import L from 'leaflet';
//link to the git file and bounds on the map for the respective gif
//please follow the format and naming style
const image_7_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image7.gif'; //path to raw file stored on github 
const image_7_sw = L.latLng(80.36986904043088, -104.84527587890626); //  southwest coordinate
const image_7_ne = L.latLng(80.90761572909896, -101.51092529296876); //  northeast coordinate

const image_8_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image8.gif'; //path to raw file stored on github 
const image_8_sw = L.latLng(80.37078793327677, -101.29119873046876); //  southwest coordinate
const image_8_ne = L.latLng(81.34146214129296, -97.8689581853035); //  northeast coordinate

//boxes for links with popups
const megagon_industries_URL = "https://megagonindustries.com/";
const megagon_industries_sw = L.latLng(81.92858708067713, -49.641554257440355);
const megagon_industries_ne = L.latLng(82.70354383450336, -42.88528433004333);

const greenlight_trailer_URL = "https://www.youtube.com/embed/_-KESI3qIBg";
const greenlight_trailer_sw =  L.latLng(69.23084132902646, -84.67437744140625); 
const greenlight_trailer_ne =  L.latLng(69.23084132902646, -84.67437744140625); 

//circular parameters for links with popups
const circular_area_radius = 50000;

const kickstarter_interview_URL = "https://www.redbull.com/ca-en/lonely-mountains-downhill-kickstarter-interview";
const kickstarter_interview_bubenik_center = L.latLng(83.35696994817707, -74.20223862097612); 

export {
    image_7_URL,
    image_7_sw,
    image_7_ne,

    image_8_URL,
    image_8_sw,
    image_8_ne,

    megagon_industries_URL,
    megagon_industries_sw,
    megagon_industries_ne,

    greenlight_trailer_URL,
    greenlight_trailer_sw,
    greenlight_trailer_ne,

    circular_area_radius,

    kickstarter_interview_URL,
    kickstarter_interview_bubenik_center

    };