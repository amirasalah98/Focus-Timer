import React from "react";
import {Link} from 'react-router-dom'


function Home(){

    return(
        <>
        <h2>One task at a time</h2>
        <i><b>"Focus on what matters, one block at a time"</b></i>
        <p>Begin your focused work session</p>
        <Link to='/create'>+ Create Focus Block</Link>
        </>
    )
}
export default Home;