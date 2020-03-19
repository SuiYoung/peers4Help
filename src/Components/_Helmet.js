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
            <meta property="og:url" content="https://ethicalMakeupC25.github.io/project6/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Ethical Makeup" />
            <meta property="og:description"
                content="Search for vegan makeup products" />
            {/* <meta property="og:image" content="" /> */}
            </Helmet>
            ...
        </div>
        );
    }
}

export default Application;