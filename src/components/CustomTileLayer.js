import L from "leaflet";
import { createLayerComponent } from "@react-leaflet/core";

function getNormalizedCoord(coord, zoom) {
    var y = coord.y;
    var x = coord.x;

    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    var tileRange = 1 << zoom;

    // don't repeat across Y-axis (vertically)
    if (y < 0 || y >= tileRange) {
        return null;
    }

    // repeat across X-axis
    if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
    }

    return {
        x: x,
        y: y
    };

}

// @see https://stackoverflow.com/a/65713838/4295853
// @ts-ignore
L.TileLayer.Kitten = L.TileLayer.extend({
    getTileUrl: function(coords: L.Coords, zoom: L.Zoom) {
        var normalizedCoord = getNormalizedCoord(coords, zoom);
        if(normalizedCoord && (normalizedCoord.x < Math.pow(2, zoom)) && (normalizedCoord.x > -1) && (normalizedCoord.y < Math.pow(2, zoom)) && (normalizedCoord.y > -1)) {
            return "./CustomTiles" + zoom + '/' + normalizedCoord.x + '/' + normalizedCoord.y + '.png';
        } 
    }
});

// @ts-ignore
L.tileLayer.kitten = function() {
    // @ts-ignore
    return new L.TileLayer.Kitten();
}

// @ts-ignore
const createKittenLayer = (props, context) => {
    // @ts-ignore
    const instance = L.tileLayer.kitten(props.url, {...props});
    return {instance, context};
}

// @ts-ignore
const updateKittenLayer = (instance, props, prevProps) => {
    if (prevProps.url !== props.url) {
        if (instance.setUrl) instance.setUrl(props.url)
    }

    if (prevProps.userId !== props.userId) {
        if (instance.setUserId) instance.setUserId(props.userId)
    }
}

const CustomTileLayer = createLayerComponent(createKittenLayer, updateKittenLayer);
export default CustomTileLayer;