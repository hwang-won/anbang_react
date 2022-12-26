import React from "react";
import { isMobile } from "react-device-detect";
import Web from "./Web";
import Mobile from "./Mobile";

function App() {
    return <>{isMobile ? <Mobile /> : <Web />}</>;
}

export default App;
