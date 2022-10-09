import React from 'react'
import { AboutBackground } from '../components/AboutBackground'
import { AboutHeader } from '../components/AboutHeader'
import { AboutHistory } from '../components/AboutHistory'
import { AboutInfo } from '../components/AboutInfo'
import { Map } from '../components/Map'

export const About = () => {
    return (
        <>
            <AboutHeader />
            <AboutBackground />
            <AboutHistory />
            <AboutInfo />
            <Map />

        </>
    )
}
