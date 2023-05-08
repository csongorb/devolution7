import L, { LatLngBounds } from 'leaflet';

//actual map area bounds for defining the right center
const MAP_SE = L.latLng(-33.70149279558436, -179.99443649732783);
const MAP_NE = L.latLng(85.0511287798066, -13.013472788599131);
const MAP_BOUNDS = new LatLngBounds([MAP_SE], [MAP_NE]);

//link to the git file and bounds on the map for the respective gif
//please follow the format and naming style
const image_7_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image7.gif'; //path to raw file stored on github 
const image_7_sw = L.latLng(80.5359558187302, -103.98834228515626); //  southwest coordinate
const image_7_ne = L.latLng(81.06962428671915, -100.64849853515625); //  northeast coordinate

const image_8_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image8.gif'; //path to raw file stored on github 
const image_8_sw = L.latLng(80.53956806928963, -100.45074462890626); //  southwest coordinate
const image_8_ne = L.latLng(81.49579959657608, -97.00653076171876); //  northeast coordinate

const image_9_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image9.gif'; //path to raw file stored on github 
const image_9_sw = L.latLng(78.20689992375854, -101.25274658203126); //  southwest coordinate
const image_9_ne = L.latLng(78.61515968121294, -98.18206787109376); //  northeast coordinate

const image_10_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image10.gif'; //path to raw file stored on github 
const image_10_sw = L.latLng(76.93341135810341, -105.03204345703126); //  southwest coordinate
const image_10_ne = L.latLng(77.40185061073129, -101.26922607421876); //  northeast coordinate

const image_17_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image17.gif'; //path to raw file stored on github 
const image_17_sw = L.latLng(72.25779089910077, -85.63568115234376); //  southwest coordinate
const image_17_ne = L.latLng(72.88458958868159, -82.62542724609376); //  northeast coordinate


//boxes for links with popups
const megagon_industries_URL = "https://megagonindustries.com/";
const megagon_industries_sw = L.latLng(81.92858708067713, -49.641554257440355);
const megagon_industries_ne = L.latLng(82.70354383450336, -42.88528433004333);

const greenlight_trailer_URL = "https://www.youtube.com/embed/_-KESI3qIBg";
const greenlight_trailer_sw =  L.latLng(68.82585011229355, -86.26998910745671); 
const greenlight_trailer_ne =  L.latLng(69.63989262488842, -83.21607799565199); 

//circular parameters for links with popups
const circular_area_radius = 50000;

const kickstarter_interview_URL = "https://www.redbull.com/ca-en/lonely-mountains-downhill-kickstarter-interview";
const kickstarter_interview_bubenik_center = L.latLng(83.35696994817707, -74.20223862097612); 
const kickstarter_interview_helbig_center = L.latLng(82.60875400198577, -83.36488354477183); 

const igf_interview_URL = "https://www.gamedeveloper.com/disciplines/road-to-the-igf-megagon-industries-i-lonely-mountains-downhill-i-"
const igf_interview_center = L.latLng(82.4198342344112, -62.930088148720806); 

export {
    MAP_BOUNDS,

    image_7_URL,
    image_7_sw,
    image_7_ne,

    image_8_URL,
    image_8_sw,
    image_8_ne,

    image_9_URL,
    image_9_sw,
    image_9_ne,

    image_10_URL,
    image_10_sw,
    image_10_ne,

    image_17_URL,
    image_17_sw,
    image_17_ne,


    megagon_industries_URL,
    megagon_industries_sw,
    megagon_industries_ne,

    greenlight_trailer_URL,
    greenlight_trailer_sw,
    greenlight_trailer_ne,

    circular_area_radius,

    kickstarter_interview_URL,
    kickstarter_interview_bubenik_center,
    kickstarter_interview_helbig_center,
    igf_interview_URL,
    igf_interview_center

    };