import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HelpForm from '../src/components/helpForm'
import MyBingMap from '../src/components/map'
import React, { useState } from 'react';

export default function Home() {

  const [pushPins, setPushPins] = useState([]);

  return (
    <div>
      <Head>
        <title>Dopomoga</title>
        <meta name="description" content="Help for Ukrainian people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{display: "flex", position: "relative", width: "100%", height: "100vh"}}>
        <MyBingMap pushPins={pushPins}></MyBingMap>
        <HelpForm onLocationFound={l => setPushPins([...pushPins, { center: {
          latitude: l.location.lat,
          longitude: l.location.lng
        }, options: { title: l.title }}])}></HelpForm>
      </div>
    </div>
  )
}
