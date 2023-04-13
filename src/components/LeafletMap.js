import React from 'react'
import { MapContainer, SVGOverlay, Marker, Popup } from 'react-leaflet'
import "./LeafletMap.css"

import {ReactComponent as SvgElement0} from './bg.svg';
import {ReactComponent as SvgElement1} from './tree.svg';
//import {ReactComponent as SvgElement2} from './diagram50.svg';

function LeafletMap ()
{
    const position = [22, -115]
    const bounds = [[32, -130],  [13, -100]]

    
    return(
        <div className="map-container">            
            <MapContainer  center={position} zoom={6} scrollWheelZoom={false}
            style={{height: 700, width : "100%"}}
            >
            <SVGOverlay  bounds={bounds} zIndex={0}>
                <SvgElement0 />
            </SVGOverlay>
            <SVGOverlay  bounds={bounds} zIndex={1} >
                <SvgElement1 />
            </SVGOverlay>

            <Marker position={bounds[0]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}

export default LeafletMap;