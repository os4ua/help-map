import { Coordinates } from "./location";

const createNewRequest = async (typeOfHelp: String, location: Coordinates, address: String) => {
    const helpRequest = {
        typeOfHelp,
        lat: location.lat,
        lng: location.lng,
        address
    }

    await fetch(`/api/help/requests/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(helpRequest)
    })
};

export default createNewRequest;