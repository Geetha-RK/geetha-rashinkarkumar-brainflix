import './App.scss';
import Nextvideolist from './components/Nextvideolist/Nextvideolist';
import videoDetails from './data/video-details.json';
import Header from './components/Header/Header';
import Videoplayer from './components/Videoplayer/Videoplayer';
import { useState } from 'react';
import Commentsform from './components/Commentsform/Commentsform';
import Videothumbnail from './components/VideoThumbnail/VideoThumbnail';

function App() {
  const [currentVideo,setCurrentVideo] = useState(videoDetails[0]);
  const [remainingVideos, setRemainingVideos] = useState(videoDetails.filter(video => video.id !== videoDetails[0].id));

  function clickVideo(selectedVideo){
    setCurrentVideo(selectedVideo);
    setRemainingVideos(videoDetails.filter(video => video.id !== selectedVideo.id));
  }

  return (
    <>
      <Header/>
      <Videothumbnail videoDetails={currentVideo} />
      <div className='align'>
        <div className='align__box1'>
          <Videoplayer videoDetails={currentVideo} />
          <Commentsform videoDetails={currentVideo}/>
        </div>
        <div className="align__box2">
          <Nextvideolist videoDetails={remainingVideos} clickVideo={clickVideo}/>
        </div>
      </div>
    </>
  )
}

export default App;
