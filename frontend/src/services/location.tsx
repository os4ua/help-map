import settings from '../../settings'

export interface Coordinates {
    lat: Number,
    lng: Number,
}

export async function getLocationByAddress(address: string): Promise<Coordinates> {

    const countryRegion = "UA";
    const addressLine = address;
    const bingMapsKey = settings.bing.map.key;
    const url = `http://dev.virtualearth.net/REST/v1/Locations?countryRegion=${countryRegion}&addressLine=${addressLine}&key=${bingMapsKey}`

    const response = await window.fetch(url, {
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    });
    console.log(response);

    const {resourceSets} = await response.json()
    if(response.ok) {
        const [lat, lng] = resourceSets[0].resources[0].point.coordinates;
        return {
            lat: lat,
            lng: lng
        };
    } else {
        return Promise.reject("cannot get location")
    } 
}