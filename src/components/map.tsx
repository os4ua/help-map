import BingMapsReact from "bingmaps-react"
import settings from "../../settings"

const viewOptions = {
    center: {
        latitude: 50.4501,
        longitude: 30.5234,
    },
    zoom: 8,
}

const mapReady = m => {
    console.log("map ready", m);
    Microsoft.Maps.Events.addHandler(m.map.current, 'viewchange', e => console.log('view changed', e, m.map.current.getBounds()))
};

export default function MyReactApp({pushPins}) {
    return <BingMapsReact 
        bingMapsKey={settings.bing.map.key} 
        pushPins={pushPins}
        viewOptions={viewOptions}
        onMapReady={mapReady}
    ></BingMapsReact>
}