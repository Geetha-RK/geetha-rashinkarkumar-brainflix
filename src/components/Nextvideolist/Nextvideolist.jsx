import './Nextvideolist.scss';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// export default function Nextvideolist({ videoDetails, currentVideo, clickVideo }){
export default function Nextvideolist({ videoDetails, currentVideo }){

    console.log("VideoDetails:",videoDetails);
    console.log("CurrentVideo:",currentVideo);

    return(
        <section className='nextvideo'>
            <p className="nextvideo__title">Next videos</p>
                {videoDetails.filter((video) => video.id !== currentVideo.id).map((video)=>(
                    <Link 
                    to={`/video/${video.id}`} 
                    key={video.id} 
                    className="nextvideo__cardslink"
                    >
                   
                    <div className="nextvideo__cards" >                           
                        <div className='nextvideo__img'>
                            <img className="nextvideo__thumbnail" src={video.image} alt="thumbnail-img"/>
                        </div>
                        <div className="nextvideo__copy">
                            <div className="nextvideo__copy-title">{video.title}</div>
                            <div className="nextvideo__copy-author">{video.channel}</div>
                        </div>
                    </div>
                    </Link>
                
                ))}
        </section>
    );
};

