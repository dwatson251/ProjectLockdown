import React from 'react';
import './map.css';
import mapboxgl from "mapbox-gl";

/**
 * Primary UI component for user interaction
 */
export class Map extends React.Component {
  public componentDidMount() {
    mapboxgl.accessToken = String(process.env.REACT_APP_MAPBOX_TOKEN);

    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jfqueralt/ckavedmnk253z1iphmsy39s3r?optimize=true',
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      keyboard: false,
      pitchWithRotate: false,
      hash: true,
    });

    console.log(process.env)
  }

  render() {
    return (
        <div
            id="map"
            className="map-container"
        >

        </div>
    );
  }
}
