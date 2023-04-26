import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

function LeafletMap ()
{

    const center = [51.505, -0.09]

    return(
        <div >            
            <MapContainer  center={center} zoom={2} scrollWheelZoom={false}
            style={{height: 700, width : "100%"}}
            >
                    <TileLayer 
                        noWrap={true}
                        name="Test"
                        url="https://raw.githubusercontent.com/csongorb/devolution7/master/src/components/CustomTiles/{z}/{x}/{y}.png"
/>
            </MapContainer>
        </div>
    )
}

export default LeafletMap;