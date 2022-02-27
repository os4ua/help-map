import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HelpForm from '../src/components/helpForm'
import MyBingMap from '../src/components/map'
import React, { useState } from 'react';

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

  const onLocationFound = l => {
    setPushPins([...pushPins, {
      center: {
        latitude: l.location.lat,
        longitude: l.location.lng
      }, 
      options: { 
        title: l.title }
    }])

    setViewOption({...viewOption, center: {latitude: l.location.lat,
      longitude: l.location.lng}})
  }

  return (
    <div>
      <Head>
        <title>Dopomoga</title>
        <meta name="description" content="Help for Ukrainian people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex", position: "relative", width: "100%", height: "100vh" }}>
        <MyBingMap pushPins={pushPins} viewOptions={viewOption}></MyBingMap>
        <HelpForm onLocationFound={onLocationFound}></HelpForm>
      </div>
    </div>
  )
}
