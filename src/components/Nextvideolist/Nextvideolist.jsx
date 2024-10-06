import './Nextvideolist.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Nextvideolist({ videoDetails, currentVideo }){

     const [newVideos, setNewVideos] = useState([]);

     useEffect(() => {
        // Retrieve new video IDs from local storage
        const storedVideos = JSON.parse(localStorage.getItem('newVideos')) || [];
        setNewVideos(storedVideos);
    }, []);

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
                              <img 
                                className="nextvideo__thumbnail" 
                                src={newVideos.includes(video.id) ? `http://localhost:5051/images/default.jpg` 
                                                                  : `http://localhost:5051/images/${video.id}.jpg`} 
                                alt="thumbnail-img"
                            />
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

