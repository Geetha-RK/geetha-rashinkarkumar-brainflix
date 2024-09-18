import './App.scss';
import Nextvideolist from './components/Nextvideolist/Nextvideolist';
import videoDetails from './data/video-details.json';
import Header from './components/Header/Header';


function App() {
  

  return (
    <>
      <Header/>
      <Nextvideolist videoDetails={videoDetails}/>
      
       
    </>
  )
}

export default App;
