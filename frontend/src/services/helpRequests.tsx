import { Coordinates } from "./location";

export async function createNewRequest(typeOfHelp: String, location: Coordinates, address: String, description: String) {
    const helpRequest = {
        typeOfHelp,
        lat: location.lat,
        lng: location.lng,
        address,
        description
    }

    return await fetch(`/api/help/requests/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(helpRequest)
    })
};

export interface HelpRequest {
    requestId: String,
    lat: Number,
    lng: Number,
    address: String,
    typeOfHelp: String
}

export async function getRequests(): Promise<HelpRequest[]> {
    const response = await fetch(`/api/help/requests/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })

    return await response.json()
}