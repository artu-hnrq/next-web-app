'use client'
import React, { useEffect, useRef } from 'react'
import { trackScroll, trackWindow } from '@lib/js'


export default function WindowCssPropertyConsumer() {
    useEffect(() => {
        trackScroll()
        trackWindow()
    })

    const refRef = useRef(null)
    return <div ref={refRef} />
}
