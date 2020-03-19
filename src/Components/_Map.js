// a couple of functions from the React library
import React, { Component } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: $(props => props.width);
    height: $(props => props.height);
`;

class App extends Component {
    
    componentDidMount() {
        this.map = L.map('map', {
            center: [58, 16],
            zoom: 6,
            zoomControl: false
        })

        L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1Ijoic3Vpc2F1Y2UiLCJhIjoiY2s3eTd0d2FuMDM1dTNlcGRzbG5mMGJzaCJ9.3aYnd6IVJQ3dCGE4Qqs3JA}",
            {
                detectRetina: true,
                attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 20,
                maxNativeZoom: 18,
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
                accessToken:
                "pk.eyJ1Ijoic3Vpc2F1Y2UiLCJhIjoiY2s3eTd0d2FuMDM1dTNlcGRzbG5mMGJzaCJ9.3aYnd6IVJQ3dCGE4Qqs3JA "
            }
        ).addTo(this.map);
    }

    render() {
        return <Wrapper width="1280px"  height="720px" id="mapId" />;
    }
}

export default App;
