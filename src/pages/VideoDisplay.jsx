import Nextvideolist from "../components/Nextvideolist/Nextvideolist";
import Videoplayer from "../components/Videoplayer/Videoplayer";
import { useState, useEffect } from "react";
import Commentsform from "../components/Commentsform/Commentsform";
import Videothumbnail from "../components/VideoThumbnail/VideoThumbnail";
import axios from "axios";

export default function VideoDisplay() {
  const [videoDetails, setVideoDetails] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=41bfcc3e-1518-4576-9462-da7e64187139"
        );
        if (response.data.length > 0) {
            setVideoDetails(response.data);
            getCurrentApi(response.data[0].id);
            // setIsLoading(false);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    getApi();
  }, []);

    // if (isLoading) {
    //   return  alert("Loading...");
    // }

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
