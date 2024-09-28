import Nextvideolist from "../components/Nextvideolist/Nextvideolist";
import Videoplayer from "../components/Videoplayer/Videoplayer";
import { useState, useEffect } from "react";
import Commentsform from "../components/Commentsform/Commentsform";
import Videothumbnail from "../components/VideoThumbnail/VideoThumbnail";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';


export default function VideoDisplay() {
  const [videoDetails, setVideoDetails] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=41bfcc3e-1518-4576-9462-da7e64187139"
        );
        if (response.data.length > 0) {
            setVideoDetails(response.data);
            // if (!id) {
            //   // navigate(`/video/${response.data[0].id}`);  // Navigate to the first video's ID
            //   Navigate(`/`);//Navigate to home page
            // }
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

    useEffect(() => {
      if (id) {
        getCurrentApi(id); 
      }
    }, [id]);

  const getCurrentApi = async (id) => {
    try {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=41bfcc3e-1518-4576-9462-da7e64187139`
      );
      setCurrentVideo(response.data);
    } catch (error) {
      console.error("Error fetching the current video", error);

      if (error.response && error.response.status === 404) {
        navigate('/not-found');
      }
    }
  };


  return (
    <>
      {currentVideo && (
        <>
          <Videothumbnail videoDetails={currentVideo} />
          <div className="align">
            <div className="align__box1">
              <Videoplayer videoDetails={currentVideo} />
              <Commentsform videoDetails={currentVideo} getCurrentApi={getCurrentApi}/>
            </div>
            <div className="align__box2">
              <Nextvideolist
                videoDetails={videoDetails}
                currentVideo={currentVideo}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
