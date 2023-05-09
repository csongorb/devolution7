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

const image_11_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image11.gif'; //path to raw file stored on github 
const image_11_sw = L.latLng(71.48011967136058, -63.86077880859376); //  southwest coordinate
const image_11_ne = L.latLng(71.85160973963254, -62.04803466796876); //  northeast coordinate

const image_12_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image12.gif'; //path to raw file stored on github 
const image_12_sw = L.latLng(71.20245075633429, -62.21282958984376); //  southwest coordinate
const image_12_ne = L.latLng(71.4626635988984, -60.77911376953126); //  northeast coordinate

const image_13_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image13.gif'; //path to raw file stored on github 
const image_13_sw = L.latLng(70.78745215040927, -62.97637939453126); //  southwest coordinate
const image_13_ne = L.latLng(71.18119875503511, -61.47674560546876); //  northeast coordinate

const image_14_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image14.gif'; //path to raw file stored on github 
const image_14_sw = L.latLng(71.20599050686621, -63.85528564453126); //  southwest coordinate
const image_14_ne = L.latLng(71.4679020868983, -62.27874755859376); //  northeast coordinate

const image_15_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image15.gif'; //path to raw file stored on github 
const image_15_sw = L.latLng(71.48186440599106, -61.95465087890626); //  southwest coordinate
const image_15_ne = L.latLng(71.85160973963254, -60.77362060546876); //  northeast coordinate

const image_16_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image16.gif'; //path to raw file stored on github 
const image_16_sw = L.latLng(71.56716236106318, -85.63568115234376); //  southwest coordinate
const image_16_ne = L.latLng(72.23098799368212, -82.62542724609376); //  northeast coordinate

const image_17_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image17.gif'; //path to raw file stored on github 
const image_17_sw = L.latLng(72.25779089910077, -85.63568115234376); //  southwest coordinate
const image_17_ne = L.latLng(72.88458958868159, -82.62542724609376); //  northeast coordinate

const image_35_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image35.gif'; //path to raw file stored on github 
const image_35_sw = L.latLng(60.765330530709996, -69.41986083984376); //  southwest coordinate
const image_35_ne = L.latLng(61.664592399485905, -66.17889404296876); //  northeast coordinate

const image_36_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image36.gif'; //path to raw file stored on github 
const image_36_sw = L.latLng(60.48239739097804, -66.09100341796876); //  southwest coordinate
const image_36_ne = L.latLng(61.66198505673872, -62.33367919921876); //  northeast coordinate

const image_60_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image60.gif'; //path to raw file stored on github 
const image_60_sw = L.latLng(-0.13018794331111386, -83.04840087890626); //  southwest coordinate
const image_60_ne = L.latLng(2.1215242609344274, -79.06585693359376); //  northeast coordinate

const image_76_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image76.gif'; //path to raw file stored on github 
const image_76_sw = L.latLng(-14.262786005452414, -53.17657470703125); //  southwest coordinate
const image_76_ne = L.latLng(-13.36664001412626, -52.01202392578126); //  northeast coordinate

const image_77_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image77.gif'; //path to raw file stored on github 
const image_77_sw = L.latLng(-14.268109785093252, -51.79229736328126); //  southwest coordinate
const image_77_ne = L.latLng(-13.37198431269195, -50.63873291015626); //  northeast coordinate

const image_78_URL = 'https://raw.githubusercontent.com/csongorb/devolution7/master/src/assets/images/leafletimages/image78.gif'; //path to raw file stored on github 
const image_78_sw = L.latLng(-14.273433438939893, -54.55535888671875); //  southwest coordinate
const image_78_ne = L.latLng(-13.361295597106919, -53.40179443359376); //  northeast coordinate

//boxes for links with popups
const megagon_industries_URL = "https://megagonindustries.com/";
const megagon_industries_sw = L.latLng(81.92858708067713, -49.641554257440355);
const megagon_industries_ne = L.latLng(82.70354383450336, -42.88528433004333);

const greenlight_trailer_URL = "https://www.youtube.com/embed/_-KESI3qIBg";
const greenlight_trailer_sw =  L.latLng(69.34604503609113, -79.74700927734376); 
const greenlight_trailer_ne =  L.latLng(70.14465591204957, -76.65985107421875); 

const yeti_mountain_URL = "https://www.youtube.com/embed/ojY8gIuQ8VI";
const yeti_mountain_sw =  L.latLng(81.70917918992257, -125.10955810546876); 
const yeti_mountain_ne =  L.latLng(82.30837788909356, -119.36920166015626); 

const lara_croft_URL = "https://www.youtube.com/embed/Ox-9IOBbJnM";
const lara_croft_sw =  L.latLng(81.68720912699644, -130.42419433593753); 
const lara_croft_ne =  L.latLng(82.17138585132723, -125.86486816406251); 

const and_then_it_rained_URL = "https://www.youtube.com/embed/R7g7UlFlMA8";
const and_then_it_rained_sw =  L.latLng(81.28030141150958, -48.67218017578126); 
const and_then_it_rained_ne =  L.latLng(81.68855913146949, -44.98077392578126); 

const twisted_lines_trailer_URL = "https://www.youtube.com/embed/x97HDeZO5ME";
const twisted_lines_trailer_sw =  L.latLng(81.27696971088555, -44.76654052734375); 
const twisted_lines_trailer_ne =  L.latLng(81.68697086546005, -41.05865478515626); 

const lmd_climate_change_edition_URL = "https://www.youtube.com/embed/sc5Wynoihs0";
const lmd_climate_change_edition_sw =  L.latLng(68.75490274229087, -87.58026123046875); 
const lmd_climate_change_edition_ne =  L.latLng(69.73580786129756, -84.38873291015626); 

const lmd_kickstarter_trailer_URL = "https://www.youtube.com/embed/Dj8MOIxOdUY";
const lmd_kickstarter_trailer_sw =  L.latLng(67.25781893884714, -102.92266845703126); 
const lmd_kickstarter_trailer_ne =  L.latLng(68.1394652752747, -99.82452392578126); 

const lmd_demo_gameplay_URL = "https://www.youtube.com/embed/e0qrvuNWofk";
const lmd_demo_gameplay_sw =  L.latLng(63.96221988247847, -85.64666748046876); 
const lmd_demo_gameplay_ne =  L.latLng(65.14680748791784, -81.95526123046876); 

const lmd_launch_trailer_URL = "https://www.youtube.com/embed/nfJxYa3kt5U";
const lmd_launch_trailer_sw =  L.latLng(8.323473517578963, -96.44348144531251); 
const lmd_launch_trailer_ne =  L.latLng(12.793588915696942, -90.35705566406251); 

const lmd_dev_speedrun_URL = "https://www.youtube.com/embed/qpM_C2eSm-0";
const lmd_dev_speedrun_sw =  L.latLng(-14.799845265580686, -81.75750732421876); 
const lmd_dev_speedrun_ne =  L.latLng(-12.488604694020848, -78.60443115234376); 

const lmd_eldfjall_island_URL = "https://www.youtube.com/embed/RFCKVPaETUk";
const lmd_eldfjall_island_sw =  L.latLng(2.035338263850917, -64.26452636718751); 
const lmd_eldfjall_island_ne =  L.latLng(5.783245444138244, -59.2327880859375); 

const lmd_rileys_return_URL = "https://www.youtube.com/embed/jiqFO3n6vJ4";
const lmd_rileys_return_sw =  L.latLng(-22.815175182710817, -51.02874755859376); 
const lmd_rileys_return_ne =  L.latLng(-21.093213073347744, -48.53485107421876); 

const lmd_misty_peak_URL = "https://www.youtube.com/embed/IPbK53UtYL0";
const lmd_misty_peak_sw =  L.latLng(-22.114650504047564, -39.64691162109376); 
const lmd_misty_peak_ne =  L.latLng(-21.088087883896886, -38.17474365234376); 


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

    image_11_URL,
    image_11_sw,
    image_11_ne,

    image_12_URL,
    image_12_sw,
    image_12_ne,

    image_13_URL,
    image_13_sw,
    image_13_ne,

    image_14_URL,
    image_14_sw,
    image_14_ne,

    image_15_URL,
    image_15_sw,
    image_15_ne,

    image_16_URL,
    image_16_sw,
    image_16_ne,

    image_17_URL,
    image_17_sw,
    image_17_ne,

    image_35_URL,
    image_35_sw,
    image_35_ne,

    image_36_URL,
    image_36_sw,
    image_36_ne,

    image_60_URL,
    image_60_sw,
    image_60_ne,

    image_76_URL,
    image_76_sw,
    image_76_ne,

    image_77_URL,
    image_77_sw,
    image_77_ne,

    image_78_URL,
    image_78_sw,
    image_78_ne,

    megagon_industries_URL,
    megagon_industries_sw,
    megagon_industries_ne,

    greenlight_trailer_URL,
    greenlight_trailer_sw,
    greenlight_trailer_ne,

    lara_croft_URL,
    lara_croft_sw,
    lara_croft_ne,

    yeti_mountain_URL,
    yeti_mountain_sw,
    yeti_mountain_ne,

    and_then_it_rained_URL,
    and_then_it_rained_sw,
    and_then_it_rained_ne,

    twisted_lines_trailer_URL,
    twisted_lines_trailer_sw,
    twisted_lines_trailer_ne,

    lmd_climate_change_edition_URL,
    lmd_climate_change_edition_sw,
    lmd_climate_change_edition_ne,

    lmd_kickstarter_trailer_URL,
    lmd_kickstarter_trailer_sw,
    lmd_kickstarter_trailer_ne,

    lmd_demo_gameplay_URL,
    lmd_demo_gameplay_sw,
    lmd_demo_gameplay_ne,

    lmd_launch_trailer_URL,
    lmd_launch_trailer_sw,
    lmd_launch_trailer_ne,

    lmd_dev_speedrun_URL,
    lmd_dev_speedrun_sw,
    lmd_dev_speedrun_ne,

    lmd_eldfjall_island_URL,
    lmd_eldfjall_island_sw,
    lmd_eldfjall_island_ne,

    lmd_rileys_return_URL,
    lmd_rileys_return_sw,
    lmd_rileys_return_ne,

    lmd_misty_peak_URL,
    lmd_misty_peak_sw,
    lmd_misty_peak_ne,


    circular_area_radius,

    kickstarter_interview_URL,
    kickstarter_interview_bubenik_center,
    kickstarter_interview_helbig_center,
    igf_interview_URL,
    igf_interview_center

    };