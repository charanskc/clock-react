import React from 'react';
import Hour from "./Hour.jsx";
import Minute from "./Minute.jsx";
import Seconds from "./Seconds.jsx";

function App() {
    return(
    <div class="clock">
        <Hour />
        <Minute />
        <Seconds />
    </div>
    );
}

export default App;