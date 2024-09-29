import Nextvideolist from "../components/Nextvideolist/Nextvideolist";
import Videoplayer from "../components/Videoplayer/Videoplayer";
import { BASE_URL, API_KEY } from '../utils/apiconfig';
import { useState, useEffect } from "react";
import Commentsform from "../components/Commentsform/Commentsform";
import Videothumbnail from "../components/VideoThumbnail/VideoThumbnail";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import './VideoDisplay.scss';

export default function VideoDisplay() {
  const [videoDetails, setVideoDetails] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/videos?api_key=${API_KEY}`
        );
        if (response.data.length > 0) {
            setVideoDetails(response.data);
            getCurrentApi(response.data[0].id);
          
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    getApi();
  }, []);

    useEffect(() => {
      if (id) {
        getCurrentApi(id); 
      }
    }, [id]);

  const getCurrentApi = async (id) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/videos/${id}?api_key=${API_KEY}`
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
