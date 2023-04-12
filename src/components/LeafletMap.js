import React from 'react'
import { MapContainer, SVGOverlay } from 'react-leaflet'
import "./LeafletMap.css"

import {ReactComponent as SvgElement0} from './bg.svg';
import {ReactComponent as SvgElement1} from './tree.svg';
function LeafletMap ()
{
    const position = [51.505, -0.09]
    const bounds = [[51.49, -0.08],  [51.5, -0.06],]

    
    return(
        <div id="map">            
            <MapContainer  center={position} zoom={15} scrollWheelZoom={false}
            style={{height: "100vh"}}
            >
            <SVGOverlay bounds={bounds} zIndex={0}>
                <SvgElement0 />
            </SVGOverlay>

            <SVGOverlay bounds={bounds} zIndex={1}>
                <SvgElement1 />
            </SVGOverlay>

            </MapContainer>
        </div>
    )
}

export default LeafletMap;