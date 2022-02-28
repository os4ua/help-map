import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HelpForm from '../src/components/helpForm'
import MyBingMap from '../src/components/map'
import React, { useEffect, useState } from 'react';
import { getRequests } from '../src/services/helpRequests'
import { title } from 'process';

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

  const onLocationFound = async l => {
    await updateData()

    setViewOption({
      ...viewOption,
      center: {
        latitude: l.location.lat,
        longitude: l.location.lng
      }
    })
  }

  const updateData = async () => {
    const requests = await getRequests()
    const pins = requests.map(r => {
      return {
        center: {
          latitude: r.lat,
          longitude: r.lng
        },
        options: {
          title: `${r.address} | ${r.typeOfHelp}`
        }
      }
    })
    console.log('received pins', pins)
    setPushPins(pins)
  }

  useEffect(() => {
    updateData()
  }, [])

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
