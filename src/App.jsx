import './App.scss';
import Nextvideolist from './components/Nextvideolist/Nextvideolist';
import videoDetails from './data/video-details.json';


function App() {
  

  return (
    <>
      <Nextvideolist videoDetails={videoDetails}/>
      
       
    </>
  )
}

export default App;
