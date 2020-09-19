import React from 'react'
import "./videoFooter.css";
import Ticker from "react-ticker";

import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter({channel,description,song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
    <h3>@{channel}</h3>
    <p>{description}</p>
                    <div className="videoFooter_ticker">
            <MusicNoteIcon className="videoFooter_Icon"/>
            <Ticker mode="smooth" >
            {({ index }) => (
            <>
                <p>{song}</p>
                
            </>
        )}
            </Ticker>
            </div>
            </div>
            <img alt="name of the song" className="videoFooter_Record" src="https://static.thenounproject.com/png/934821-200.png" />
        </div>
    )
}

export default VideoFooter
