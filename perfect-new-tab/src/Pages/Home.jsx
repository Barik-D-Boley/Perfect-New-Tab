import React, { useState } from 'react';

function Home() {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setClock(new Date().toLocaleTimeString())
    }, 1000);

    return (
        <div>
            <p id="clock">{clock}</p>
            <form action="http://google.com/search">
                <input type="text" id="searchBar" autoComplete="off" spellCheck="false" placeholder="Search" autoFocus />
            </form>
        </div>
    )
}

export default Home
