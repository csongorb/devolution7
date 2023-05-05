import L from 'leaflet';

//link to the git file and bounds on the map for the respective gif
//please follow the format and naming style
const image_7_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image7.gif'; //path to raw file stored on github 
const image_7_sw = L.latLng(80.36986904043088, -104.84527587890626); //  southwest coordinate
const image_7_ne = L.latLng(80.90761572909896, -101.51092529296876); //  northeast coordinate

const image_8_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image8.gif'; //path to raw file stored on github 
const image_8_sw = L.latLng(80.37078793327677, -101.29119873046876); //  southwest coordinate
const image_8_ne = L.latLng(81.34146214129296, -97.8689581853035); //  northeast coordinate

export {
    image_7_URL,
    image_7_sw,
    image_7_ne,

    image_8_URL,
    image_8_sw,
    image_8_ne
    };