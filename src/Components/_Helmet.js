import React from "react";
import { Helmet } from "react-helmet";

class Application extends React.Component {
    render() {
        return (
        <div className="application">
            <Helmet>
            <meta charSet="utf-8" />
            <title>• Peers 4 Help •</title>

            {/* search metadata */}
            <meta name="description" content="Search for Help Locally From Your Neighbors" />
            <meta name="robots" content="index, nofollow" />
            <meta name="author" content="Sui Young" />
            {/* twitter metadata */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Peers4Help" />
            <meta name="twitter:description"
                content="Search for Help Locally From Your Neighbors" />
            {/* <meta name="twitter:image" content="" /> */}
            {/* linkedin and facebook metadata */}
            <meta property="og:url" content="http://www.xyoung.ca" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Peers4Help" />
            <meta property="og:description"
                content="Search for Help Locally From Your Neighbors" />
            {/* <meta property="og:image" content="" /> */}

            {/* import map */}
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossorigin=""/>
            <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
            integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
            crossorigin=""></script>
            </Helmet>
            
        </div>
        );
    }
}

export default Application;