import './App.scss';
import Nextvideolist from './components/Nextvideolist/Nextvideolist';
import videoDetails from './data/video-details.json';
import Header from './components/Header/Header';
import Videoplayer from './components/Videoplayer/Videoplayer';
import { useState } from 'react';
import Commentsform from './components/Commentsform/Commentsform';

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
      <Videoplayer videoDetails={currentVideo} />
      <Commentsform videoDetails={currentVideo}/>
      <Nextvideolist videoDetails={remainingVideos} clickVideo={clickVideo}/>
    </>
  )
}

export default App;
