import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HelpForm from '../src/components/helpForm'
import MyMap from '../src/components/map'
import BingMapsReact from "bingmaps-react"
import React, { useEffect, useState } from 'react';
import { getRequests } from '../src/services/helpRequests'

function requestToPushPin(r) {
  return {
    center: {
      latitude: r.lat,
      longitude: r.lng
    },
    options: {
      title: `${r.address} | ${r.typeOfHelp}`
    }
  }
}

export default function Home() {

  const kiyvViewOptions = {
    center: {
      latitude: 50.4501,
      longitude: 30.5234,
    },
    zoom: 8,
  }

  const [pushPins, setPushPins] = useState([])
  const [viewOption, setViewOption] = useState(kiyvViewOptions)

  const refreshPins = async () => {
    const requests = await getRequests()
    const pins = requests.map(r => requestToPushPin(r))
    setPushPins(pins)
  }

  const onLocationFound = async l => {
    await refreshPins()

    setViewOption({
      ...viewOption,
      center: {
        latitude: l.location.lat,
        longitude: l.location.lng
      }
    })
  }

  return (
    <div>
      <Head>
        <title>Dopomoga</title>
        <meta name="description" content="Help for Ukrainian people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex", position: "relative", width: "100%", height: "100vh" }}>
        <MyMap
          pushPins={pushPins}
          viewOptions={viewOption}></MyMap>
        <div>
          <button onClick={refreshPins}>Get my pins!</button>
          <HelpForm onLocationFound={onLocationFound}></HelpForm>
        </div>
      </div>
    </div>
  )
}
