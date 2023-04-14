import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import CustomTileLayer from "./CustomTileLayer"

function LeafletMap ()
{

    const position = [22, -115]
    const bounds = [[32, -130],  [13, -100]]


    return(
        <div >            
            <MapContainer  center={position} zoom={5} scrollWheelZoom={false}
            style={{height: 700, width : "100%"}}
            >
                    <TileLayer 
                        noWrap={true}
                        name="Test"
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
            </MapContainer>
        </div>
    )
}

export default LeafletMap;