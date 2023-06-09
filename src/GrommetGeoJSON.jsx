import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { GeoJSON } from 'react-leaflet';
import L from 'leaflet'
import { Pin } from './markers';

const GrommetGeoJSON = ({ data, ...rest }) => {

    const pointToLayer = (feature, latlng) => L.marker(latlng, {
        icon: L.divIcon({
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: 'grommet-marker',
        html: ReactDOMServer.renderToString(<Pin status={feature?.grommet?.status} />),
        })
    })

    return (
        <GeoJSON key="my-geojson" data={data} pointToLayer={pointToLayer} {...rest} />
    )
}

export { GrommetGeoJSON }
