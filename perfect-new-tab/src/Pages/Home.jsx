import React from 'react'

function Home() {
    return (
        <div>
            <p>Clock</p>
            <form action="http://google.com/search">
                <input type="text" id="searchBar" name="q" autocomplete="off" spellcheck="false" placeholder="Search" autofocus />
            </form>
        </div>
    )
}

export default Home
