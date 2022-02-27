import React, { useState } from "react"
import {getLocationByAddress} from '../services/location'

export default function HelpForm({onLocationFound}) {

    const [address, setAddress] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("working with address", address);
        const location = await getLocationByAddress(address)
        console.log("location I received: ", location )
        onLocationFound({title: address, location});
    };

    return <form
        action="/api/help/request"
        method="POST"
        style={{ display: "flex", flexDirection: "column", padding: "1.2rem" }}
        onSubmit={handleSubmit}>
        <label htmlFor="type">Type of help</label>
        <input id="type" type="text" required />
        <label htmlFor="address">Address</label>
        <input id="address" type="text" required value={address} onChange={e => setAddress(e.target.value)} />
        <button type="submit">Ask for help!</button>
    </form>;
}
