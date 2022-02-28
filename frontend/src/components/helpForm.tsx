import React, { useState } from "react"
import {getLocationByAddress} from '../services/location'
import createNewRequest from '../services/helpRequests'

export default function HelpForm({onLocationFound}) {

    const [typeOfHelp, setTypeOfHelp] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const location = await getLocationByAddress(address)
        onLocationFound({title: address, location});
        createNewRequest(typeOfHelp, location, address)
    };

    return <form
        action="/api/help/requests"
        method="POST"
        style={{ display: "flex", flexDirection: "column", padding: "1.2rem" }}
        onSubmit={handleSubmit}>
        <label htmlFor="type">Type of help</label>
        <input id="type" type="text" required value={typeOfHelp} onChange={e => setTypeOfHelp(e.target.value)} />
        <label htmlFor="address">Address</label>
        <input id="address" type="text" required value={address} onChange={e => setAddress(e.target.value)} />
        <button type="submit">Ask for help!</button>
    </form>;
}
