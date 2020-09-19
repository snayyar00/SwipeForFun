import React from 'react';
import './App.css';
import Video from './Video';



function App() {
  return (
    <div className="App">
     
    <div className="app_videos">
    <Video
    url="https://www.youtube.com/watch?v=BS50SS4mx2Q"
    channel="Sidharth"
    description="TIKTOK"
    song="99 problems React aint 1"
    shares={222}
    likes={111}
    messages={333}
    />
    <Video/>
    <Video/>
    
    </div>
    
  
    </div>
  );
}

export default App;
