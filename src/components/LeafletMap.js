import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import CustomTileLayer from "./CustomTileLayer"

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
                        url="http://localhost:8000/CustomTiles/{z}/{x}/{y}.png"
/>
            </MapContainer>
        </div>
    )
}

export default LeafletMap;