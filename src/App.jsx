import "./App.scss";
import Nextvideolist from "./components/Nextvideolist/Nextvideolist";
import Header from "./components/Header/Header";
import Videoplayer from "./components/Videoplayer/Videoplayer";
import { useState, useEffect } from "react";
import Commentsform from "./components/Commentsform/Commentsform";
import Videothumbnail from "./components/VideoThumbnail/VideoThumbnail";
import axios from "axios";

function App() {
  const [videoDetails, setVideoDetails] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=41bfcc3e-1518-4576-9462-da7e64187139"
        );
        setVideoDetails(response.data);

        if (response.data.length > 0) {
           getCurrentApi(response.data[0].id);
        }

      } catch (error) {
        console.error("Error", error);
      }
    };
    getApi();
  }, []);

  const getCurrentApi = async (id) => {
    try {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=41bfcc3e-1518-4576-9462-da7e64187139`
      );
      setCurrentVideo(response.data);
    } catch (error) {
      console.error("Error in current video", error);
    }
  };


  function clickVideo(selectedVideo) {
    getCurrentApi(selectedVideo.id);
  }

  return (
    <>
      <Header />
      {currentVideo && (
        <>
          <Videothumbnail videoDetails={currentVideo} />
          <div className="align">
            <div className="align__box1">
              <Videoplayer videoDetails={currentVideo} />
              <Commentsform videoDetails={currentVideo} />
            </div>
            <div className="align__box2">
              <Nextvideolist
                videoDetails={videoDetails}
                currentVideo={currentVideo}
                clickVideo={clickVideo}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
