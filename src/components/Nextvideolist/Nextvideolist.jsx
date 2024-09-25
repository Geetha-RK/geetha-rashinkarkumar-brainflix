import './Nextvideolist.scss';
import { useNavigate } from 'react-router-dom';

export default function Nextvideolist({ videoDetails, currentVideo, clickVideo }){
// export default function Nextvideolist({ videoDetails, currentVideo }){

    console.log("VideoDetails:",videoDetails);
    console.log("CurrentVideo:",currentVideo);

    const navigate = useNavigate();
    const handleVideoSelect = (video) => {
        clickVideo(video); 
        navigate(`/video/${video.id}`); 
    };

    return(
        <section className='nextvideo'>
            <p className="nextvideo__title">Next videos</p>
                {videoDetails.filter((video) => video.id !== currentVideo.id).map((video)=>(
                    <div className="nextvideo__cards" key={video.id} onClick={() => handleVideoSelect(video)}>    
                        
                        <div className='nextvideo__img'>
                            <img className="nextvideo__thumbnail" src={video.image} alt="thumbnail-img"/>
                        </div>
                        <div className="nextvideo__copy">
                            <div className="nextvideo__copy-title">{video.title}</div>
                            <div className="nextvideo__copy-author">{video.channel}</div>
                        </div>
                    </div>
                
                ))}
        </section>
    );
};

