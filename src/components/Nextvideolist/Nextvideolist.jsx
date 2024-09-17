import './Nextvideolist.scss';
import videoDetails from '../../data/video-details.json';

export default function Nextvideolist(){
    return(
        <section className='nextvideo'>
            <p className="nextvideo__title">Next videos</p>
                {videoDetails.map((video)=>(
                    <div className="nextvideo__cards" key={video.id}>
                    <img className="nextvideo__thumbnail" src={video.image} alt="thumbnail-img"></img>
                    <div className="nextvideo__copy">
                        <div className="nextvideo__copy-title">{video.title}</div>
                        <div className="nextvideo__copy-author">{video.channel}</div>
                    </div>
                    </div>
                ))};
        </section>
    );
};

